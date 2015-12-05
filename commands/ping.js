'use strict';

export async function handle (message, context) {
	await message.replyp('pong');
};

export const help = { info: 'Replies with pong' };
