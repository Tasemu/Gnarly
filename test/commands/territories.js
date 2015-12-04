var assert = require('assert');
var command = require('../../commands/territories.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/territories.js', function () {
	it('doesn\'t fail', function () {
		var message = new FakeMessage('!territories');
		return command(message, '').then(function () {
			assert.notEqual(message.replies.length, 0);
		});
	});
});
