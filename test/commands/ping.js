'use strict';

import assert from 'assert';
import {handle} from '../../commands/ping.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/ping.js', () => {
	it('doesn\'t fail', () => {
		const message = new FakeMessage('!ping');
		return handle(message, '').then(() => {
			assert.notEqual(message.replies.length, 0);
		});
	});

	it('returns "pong"', () => {
		const message = new FakeMessage('!ping');
		return handle(message, '').then(() => {
			assert.equal(message.replies.length, 1);
			assert.equal(message.replies[0], 'pong');
		});
	});
});
