var assert = require('assert');
var command = require('../../commands/motd.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/motd.js', function () {
	it('doesn\'t fail', function (done) {
		var message = new FakeMessage('!motd');
		command(message, '', function (err) {
			if (err) {
				return done(err);
			}
			assert.notEqual(message.replies.length, 0);
			done();
		});
	});
});
