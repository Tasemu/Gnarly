'use strict';

import Bluebird from 'bluebird';
import {getRows, sheets} from '../spreadsheet.js';
import * as interval from '../interval.js';

const MAIN_CHANNEL_ID = '108312291618885632'; // #members-chat
const ONE_HOUR = 60 * 60 * 1000;
let _intervalToken;

export function start (bot) {
	const sendMessage = Bluebird.promisify(bot.sendMessage, {context: bot});
	_intervalToken = interval.set(async () => {
		try {
			const data = await getRows(sheets.info) // return the promise for unit tests
			for (let row of data) {
				if (row.name === 'MOTD') await sendMessage(MAIN_CHANNEL_ID, row.message);
			};
		} catch (err) {
			console.error(err);
		}
	}, 3 * ONE_HOUR);
	return _intervalToken; // return for the unit test to use
};

export function stop () {
	interval.clear(_intervalToken);
};
