'use strict';

import assert from 'assert';
import {handle} from '../../commands/motd.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/motd.js', () => {
	it('doesn\'t fail', async () => {
		const message = new FakeMessage('!motd');
		await handle(message, '');
		assert.notEqual(message.replies.length, 0);
	});
});
