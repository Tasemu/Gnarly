var moment = require('moment');
var spreadsheet = require('../spreadsheet.js');

module.exports = function (message) {
	spreadsheet.getRows(2, function (err, data) {
		if (err) {
			console.error(err);
			return;
		}
		var territories = data.map(function (row) {
			var time = moment(row.lastfed)
				.add(row.days, 'days')
				.add(row.hours, 'hours')
				.add(row.minutes, 'minutes');
			return ("\n" + row.territory + " :: " + moment().to(time));
		});
		message.reply(territories.join(''));
	});
};

module.exports.help = { info: 'Replies with the guilds current territories and their food timers' };
