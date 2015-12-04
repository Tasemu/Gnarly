var assert = require('assert');
var command = require('../../commands/items.js');
var FakeMessage = require('../util/fakemessage.js');

describe('./commands/items.js', function () {
	it('doesn\'t fail', function () {
		var message = new FakeMessage('!items');
		return command(message, '').then(function () {
			assert.notEqual(message.replies.length, 0);
		});
	});
});
