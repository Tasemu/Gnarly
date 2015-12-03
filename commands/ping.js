'use strict';

module.exports = function (message, context, done) {
	message.reply('pong');
	done();
};

module.exports.help = { info: 'Replies with pong' };
