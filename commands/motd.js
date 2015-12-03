var spreadsheet = require('../spreadsheet.js');

module.exports = function (message) {
	spreadsheet.getRows(1, function (err, data) {
		if (err) {
			console.error(err);
			return;
		}
		data.forEach(function (row) {
			if (row.name === 'MOTD') message.reply(row.message);
		});
	});
};

module.exports.help = { info: 'Replies with the current Message of the Day!' };
