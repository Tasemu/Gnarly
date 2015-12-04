var assert = require('assert');
var command = require('../../commands/ping.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/ping.js', function () {
	it('doesn\'t fail', function () {
		var message = new FakeMessage('!ping');
		return command(message, '').then(function () {
			assert.notEqual(message.replies.length, 0);
		});
	});

	it('returns "pong"', function () {
		var message = new FakeMessage('!ping');
		return command(message, '').then(function () {
			assert.equal(message.replies.length, 1);
			assert.equal(message.replies[0], 'pong');
		});
	});
});
