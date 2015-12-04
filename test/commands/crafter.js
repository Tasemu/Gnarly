var assert = require('assert');
var command = require('../../commands/crafter.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/crafter.js', function () {
	it('doesn\'t fail', function () {
		var message = new FakeMessage('!crafter light cloth');
		return command(message, 'light cloth').then(function () {
			assert.notEqual(message.replies.length, 0);
		});
	});
});
