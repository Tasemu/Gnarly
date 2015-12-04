'use strict';

var Bluebird = require('bluebird');
var spreadsheet = require('../spreadsheet.js');
var getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);

module.exports = function (message, context) {
	return getRows(spreadsheet.sheets.crafters).then(function (data) {
		data.forEach(function (row) {
			if (context.toLowerCase() === row.item.toLowerCase()) {
				var replies = ['\nGuild crafters for: ' + row.item];
				replies.push('Primary: ' + row.primarycrafter);
				replies.push('Secondary: ' + row.secondarycrafter);
				replies.push('Tertiary: ' + row.tertiarycrafter);
				message.reply(replies.join('\n'));
			}
		});
	});
};

module.exports.help = { context: '<item>', info: 'Replies with the guild crafters for the queried item' };
