var assert = require('assert');
var command = require('../../commands/ping.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/ping.js', function () {
	it('doesn\'t fail', function (done) {
		var message = new FakeMessage('!ping');
		command(message, '', function (err) {
			if (err) {
				return done(err);
			}
			assert.notEqual(message.replies.length, 0);
			done();
		});
	});

	it('returns "pong"', function (done) {
		var message = new FakeMessage('!ping');
		command(message, '', function (err) {
			if (err) {
				return done(err);
			}
			assert.equal(message.replies.length, 1);
			assert.equal(message.replies[0], 'pong');
			done();
		});
	});
});
