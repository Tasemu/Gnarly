'use strict';

var spreadsheet = require('../spreadsheet.js');

module.exports = function (message, context, done) {
	spreadsheet.getRows(3, function (err, data) {
		if (err) {
			return done(err);
		}
		var items = data.map(function (row) {
			return ('\n' + row.item.toLowerCase());
		});
		message.reply(items.join(''));
		done();
	});
};

module.exports.help = { info: 'Lists all items available for use with other commands' };
