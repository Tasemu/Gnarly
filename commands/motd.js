'use strict';

var spreadsheet = require('../spreadsheet.js');

module.exports = function (message, context, done) {
	spreadsheet.getRows(1, function (err, data) {
		if (err) {
			return done(err);
		}
		data.forEach(function (row) {
			if (row.name === 'MOTD') message.reply(row.message);
		});
		done();
	});
};

module.exports.help = { info: 'Replies with the current Message of the Day!' };
