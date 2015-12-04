'use strict';

import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';
const getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);

export function handle (message, context) {
	return getRows(spreadsheet.sheets.info).then((data) => {
		data.forEach((row) => {
			if (row.name === 'MOTD') message.reply(row.message);
		});
	});
};

export const help = { info: 'Replies with the current Message of the Day!' };
