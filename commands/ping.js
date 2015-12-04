'use strict';

var Bluebird = require('bluebird');

module.exports = function (message, context) {
	message.reply('pong');

	// make sure the function returns a promise even though we don't do anything async
	return Bluebird.resolve();
};

module.exports.help = { info: 'Replies with pong' };
