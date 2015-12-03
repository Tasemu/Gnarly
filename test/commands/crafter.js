var assert = require('assert');
var command = require('../../commands/crafter.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/crafter.js', function () {
	it('doesn\'t fail', function (done) {
		var message = new FakeMessage('!crafter light cloth');
		command(message, 'light cloth', function (err) {
			if (err) {
				return done(err);
			}
			assert.notEqual(message.replies.length, 0);
			done();
		});
	});
});
