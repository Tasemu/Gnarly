'use strict';

import {getRows, sheets} from '../spreadsheet.js';

export async function handle (message, context) {
	const data = await getRows(sheets.info);
	for (let row of data) {
		if (row.name === 'MOTD') await message.replyp(row.message);
	};
};

export const help = { info: 'Replies with the current Message of the Day!' };
