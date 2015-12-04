'use strict';

var Bluebird = require('bluebird');
var spreadsheet = require('../spreadsheet.js');
var interval = require('../interval.js');
var getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);
var MAIN_CHANNEL_ID = '108312291618885632'; // #members-chat
var ONE_HOUR = 60 * 60 * 1000;
var _intervalToken;

module.exports.start = function (bot) {
	_intervalToken = interval.set(function () {
		return getRows(spreadsheet.sheets.info) // return the promise for unit tests
			.then(function (data) {
				data.forEach(function (row) {
					if (row.name === 'MOTD') bot.sendMessage(MAIN_CHANNEL_ID, row.message);
				});
			})
			.catch(function (err) {
				console.error(err);
			});
	}, 3 * ONE_HOUR);
	return _intervalToken; // return for the unit test to use
};

module.exports.stop = function () {
	interval.clear(_intervalToken);
};
