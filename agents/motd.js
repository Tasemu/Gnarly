var spreadsheet = require('../spreadsheet.js');
var MAIN_CHANNEL_ID = '108312291618885632'; // #members-chat

module.exports = function (bot) {
	setInterval(function () {
		spreadsheet.getRows(1, function (err, data) {
			data.forEach(function (row) {
				if (row.name === 'MOTD') bot.sendMessage(MAIN_CHANNEL_ID, row.message);
			});
		});
	}, (10800 * 1000));
};
