'use strict';

import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';

const getRows = Bluebird.promisify(spreadsheet.api.getRows, {context: spreadsheet.api});

export async function handle (message, context) {
	const reply = Bluebird.promisify(message.reply, {context: message});
	const data = await getRows(spreadsheet.sheets.crafters);
	for (let row of data) {
		if (context.toLowerCase() === row.item.toLowerCase()) {
			var replies = [`\nGuild crafters for: ${row.item}`];
			replies.push(`Primary: ${row.primarycrafter}`);
			replies.push(`Secondary: ${row.secondarycrafter}`);
			replies.push(`Tertiary: ${row.tertiarycrafter}`);
			await reply(replies.join('\n'));
		}
	};
};

export const help = { context: '<item>', info: 'Replies with the guild crafters for the queried item' };
