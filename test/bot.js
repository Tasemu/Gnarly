'use strict';

var assert = require('assert');
var bot = require('../bot.js');
var FakeClient = require('./util/fakeclient.js');
var FakeMessage = require('./util/fakemessage.js');

describe('./bot.js', function () {
	var client;

	beforeEach(function () {
		client = bot(new FakeClient());
	});

	it('help doesn\'t fail', function () {
		var message = new FakeMessage('!help');
		client.emit('message', message);
		assert.equal(message.replies.length, 1);
	});

	it('ping works', function () {
		var message = new FakeMessage('!ping');
		client.emit('message', message);
		assert.equal(message.replies.length, 1);
		assert.equal(message.replies[0], 'pong');
	});
});
