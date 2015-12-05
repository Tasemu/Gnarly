'use strict';

import moment from 'moment';
import {getRows, sheets} from '../spreadsheet.js';

export async function handle (message, context) {
	const data = await getRows(sheets.territories);
	const territories = data.map((row) => {
		const time = moment(row.lastfed)
			.add(row.days, 'days')
			.add(row.hours, 'hours')
			.add(row.minutes, 'minutes');
		return `\n${row.territory} :: ${moment().to(time)}`;
	});
	await message.replyp(territories.join(''));
};

export const help = { info: 'Replies with the guilds current territories and their food timers' };
