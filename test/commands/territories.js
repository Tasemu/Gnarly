var assert = require('assert');
var command = require('../../commands/territories.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/territories.js', function () {
	it('doesn\'t fail', function (done) {
		var message = new FakeMessage('!territories');
		command(message, '', function (err) {
			if (err) {
				return done(err);
			}
			assert.notEqual(message.replies.length, 0);
			done();
		});
	});
});
