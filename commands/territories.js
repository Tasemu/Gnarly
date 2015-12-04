'use strict';

import moment from 'moment';
import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';

const getRows = Bluebird.promisify(spreadsheet.api.getRows, {context: spreadsheet.api});

export async function handle (message, context) {
	const reply = Bluebird.promisify(message.reply, {context: message});
	const data = await getRows(spreadsheet.sheets.territories);
	const territories = data.map((row) => {
		const time = moment(row.lastfed)
			.add(row.days, 'days')
			.add(row.hours, 'hours')
			.add(row.minutes, 'minutes');
		return `\n${row.territory} :: ${moment().to(time)}`;
	});
	await reply(territories.join(''));
};

export const help = { info: 'Replies with the guilds current territories and their food timers' };
