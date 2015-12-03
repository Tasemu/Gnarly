var assert = require('assert');
var command = require('../../commands/items.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/items.js', function () {
	it('doesn\'t fail', function (done) {
		var message = new FakeMessage('!items');
		command(message, '', function (err) {
			if (err) {
				return done(err);
			}
			assert.notEqual(message.replies.length, 0);
			done();
		});
	});
});
