'use strict';

var moment = require('moment');
var Bluebird = require('bluebird');
var spreadsheet = require('../spreadsheet.js');
var getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);

module.exports = function (message, context) {
	return getRows(spreadsheet.sheets.territories).then(function (data) {
		var territories = data.map(function (row) {
			var time = moment(row.lastfed)
				.add(row.days, 'days')
				.add(row.hours, 'hours')
				.add(row.minutes, 'minutes');
			return ('\n' + row.territory + ' :: ' + moment().to(time));
		});
		message.reply(territories.join(''));
	});
};

module.exports.help = { info: 'Replies with the guilds current territories and their food timers' };
