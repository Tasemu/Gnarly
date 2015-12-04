'use strict';

var Bluebird = require('bluebird');
var spreadsheet = require('../spreadsheet.js');
var getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);

module.exports = function (message, context) {
	return getRows(spreadsheet.sheets.info).then(function (data) {
		data.forEach(function (row) {
			if (row.name === 'MOTD') message.reply(row.message);
		});
	});
};

module.exports.help = { info: 'Replies with the current Message of the Day!' };
