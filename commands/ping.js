'use strict';

import Bluebird from 'bluebird';

export async function handle (message, context) {
	const reply = Bluebird.promisify(message.reply, {context: message});
	await reply('pong');
};

export const help = { info: 'Replies with pong' };
