'use strict';

import Bluebird from 'bluebird';
import * as spreadsheet from '../spreadsheet.js';
import * as interval from '../interval.js';

const getRows = Bluebird.promisify(spreadsheet.api.getRows, spreadsheet.api);
const MAIN_CHANNEL_ID = '108312291618885632'; // #members-chat
const ONE_HOUR = 60 * 60 * 1000;
let _intervalToken;

export function start (bot) {
	_intervalToken = interval.set(() => {
		return getRows(spreadsheet.sheets.info) // return the promise for unit tests
			.then((data) => {
				data.forEach((row) => {
					if (row.name === 'MOTD') bot.sendMessage(MAIN_CHANNEL_ID, row.message);
				});
			})
			.catch((err) => console.error(err));
	}, 3 * ONE_HOUR);
	return _intervalToken; // return for the unit test to use
};

export function stop () {
	interval.clear(_intervalToken);
};
