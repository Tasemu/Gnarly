'use strict';

var Bluebird = require('bluebird');

export function handle (message, context) {
	message.reply('pong');

	// make sure the function returns a promise even though we don't do anything async
	return Bluebird.resolve();
};

export const help = { info: 'Replies with pong' };
