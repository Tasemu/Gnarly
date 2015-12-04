'use strict';

import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';
const getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);

export function handle (message, context) {
	return getRows(spreadsheet.sheets.crafters).then((data) => {
		data.forEach((row) => {
			if (context.toLowerCase() === row.item.toLowerCase()) {
				var replies = [`\nGuild crafters for: ${row.item}`];
				replies.push(`Primary: ${row.primarycrafter}`);
				replies.push(`Secondary: ${row.secondarycrafter}`);
				replies.push(`Tertiary: ${row.tertiarycrafter}`);
				message.reply(replies.join('\n'));
			}
		});
	});
};

export const help = { context: '<item>', info: 'Replies with the guild crafters for the queried item' };
