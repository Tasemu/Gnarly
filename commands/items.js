var spreadsheet = require('../spreadsheet.js');

module.exports = function (message) {
	spreadsheet.getRows(3, function (err, data) {
		if (err) {
			console.error(err);
			return;
		}
		var items = data.map(function (row) {
			return ('\n' + row.item.toLowerCase());
		});
		message.reply(items.join(''));
	});
};

module.exports.help = { info: 'Lists all items available for use with other commands' };
