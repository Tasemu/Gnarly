'use strict';

var Bluebird = require('bluebird');
var spreadsheet = require('../spreadsheet.js');
var getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);

module.exports = function (message, context) {
	return getRows(spreadsheet.sheets.crafters).then(function (data) {
		var items = data.map(function (row) {
			return ('\n' + row.item.toLowerCase());
		});
		message.reply(items.join(''));
	});
};

module.exports.help = { info: 'Lists all items available for use with other commands' };
