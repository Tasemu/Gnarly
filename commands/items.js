'use strict';

import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';

const getRows = Bluebird.promisify(spreadsheet.api.getRows, {context: spreadsheet.api});

export async function handle (message, context) {
	const reply = Bluebird.promisify(message.reply, {context: message});
	const data = await getRows(spreadsheet.sheets.crafters);
	const items = data.map((row) => `\n${row.item.toLowerCase()}`);
	await reply(items.join(''));
};

export const help = { info: 'Lists all items available for use with other commands' };
