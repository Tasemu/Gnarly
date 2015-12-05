'use strict';

import assert from 'assert';
import {handle} from '../../commands/ping.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/ping.js', () => {
	it('doesn\'t fail', async () => {
		const message = new FakeMessage('!ping');
		await handle(message, '');
		assert.notEqual(message.replies.length, 0);
	});

	it('returns "pong"', async () => {
		const message = new FakeMessage('!ping');
		await handle(message, '');
		assert.equal(message.replies.length, 1);
		assert.equal(message.replies[0], 'pong');
	});
});
