'use strict';

import {getRows, sheets} from '../spreadsheet.js';

export async function handle (message, context) {
	const data = await getRows(sheets.crafters);
	const items = data.map((row) => `\n${row.item.toLowerCase()}`);
	await message.replyp(items.join(''));
};

export const help = { info: 'Lists all items available for use with other commands' };
