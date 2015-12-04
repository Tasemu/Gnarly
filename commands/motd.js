'use strict';

import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';

const getRows = Bluebird.promisify(spreadsheet.api.getRows, {context: spreadsheet.api});

export async function handle (message, context) {
	const reply = Bluebird.promisify(message.reply, {context: message});
	const data = await getRows(spreadsheet.sheets.info);
	for (let row of data) {
		if (row.name === 'MOTD') await reply(row.message);
	};
};

export const help = { info: 'Replies with the current Message of the Day!' };
