'use strict';

import {getRows, sheets} from '../spreadsheet.js';

export async function handle (message, context) {
	const data = await getRows(sheets.crafters);
	for (let row of data) {
		if (context.toLowerCase() === row.item.toLowerCase()) {
			var replies = [`\nGuild crafters for: ${row.item}`];
			replies.push(`Primary: ${row.primarycrafter}`);
			replies.push(`Secondary: ${row.secondarycrafter}`);
			replies.push(`Tertiary: ${row.tertiarycrafter}`);
			await message.replyp(replies.join('\n'));
		}
	};
};

export const help = { context: '<item>', info: 'Replies with the guild crafters for the queried item' };
