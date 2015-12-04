'use strict';

import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';
const getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);

export function handle (message, context) {
	return getRows(spreadsheet.sheets.crafters).then((data) => {
		var items = data.map((row) => `\n${row.item.toLowerCase()}`);
		message.reply(items.join(''));
	});
};

export const help = { info: 'Lists all items available for use with other commands' };
