'use strict';

var spreadsheet = require('../spreadsheet.js');

module.exports = function (message, context, done) {
	spreadsheet.getRows(3, function (err, data) {
		if (err) {
			return done(err);
		}
		data.forEach(function (row) {
			if (context.toLowerCase() === row.item.toLowerCase()) {
				message.reply('Guild crafters for: ' + row.item, false, function () {
					message.reply('Primary: ' + row.primarycrafter);
					message.reply('Secondary: ' + row.secondarycrafter);
					message.reply('Tertiary: ' + row.tertiarycrafter);
				});
			}
		});
		done();
	});
};

module.exports.help = { context: '<item>', info: 'Replies with the guild crafters for the queried item' };
