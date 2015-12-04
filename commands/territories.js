'use strict';

import moment from 'moment';
import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';
const getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);

export function handle (message, context) {
	return getRows(spreadsheet.sheets.territories).then((data) => {
		var territories = data.map((row) => {
			var time = moment(row.lastfed)
				.add(row.days, 'days')
				.add(row.hours, 'hours')
				.add(row.minutes, 'minutes');
			return (`\n${row.territory} :: ${moment().to(time)}`);
		});
		message.reply(territories.join(''));
	});
};

export const help = { info: 'Replies with the guilds current territories and their food timers' };
