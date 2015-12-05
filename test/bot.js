'use strict';

import assert from 'assert';
import bot from '../bot.js';
import * as interval from '../interval.js';
import FakeClient from './util/fakeclient.js';
import FakeMessage from './util/fakemessage.js';

describe('./bot.js', () => {
	let client;

	beforeEach(() => {
		interval.enableTestMode();
		client = bot(new FakeClient());
		client.emit('ready');
	});

	afterEach(() => {
		client.emit('disconnected');
		interval.disableTestMode();
	});

	it('help doesn\'t fail', () => {
		const message = new FakeMessage('!help');
		client.emit('message', message);
		assert.equal(message.replies.length, 1);
	});

	it('ping works', () => {
		const message = new FakeMessage('!ping');
		client.emit('message', message);
		assert.equal(message.replies.length, 1);
		assert.equal(message.replies[0], 'pong');
	});
});
