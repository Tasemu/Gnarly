var assert = require('assert');
var command = require('../../commands/motd.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/motd.js', function () {
	it('doesn\'t fail', function () {
		var message = new FakeMessage('!motd');
		return command(message, '').then(function () {
			assert.notEqual(message.replies.length, 0);
		});
	});
});
