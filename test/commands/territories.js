'use strict';

import assert from 'assert';
import {handle} from '../../commands/territories.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/territories.js', () => {
	it('doesn\'t fail', async () => {
		const message = new FakeMessage('!territories');
		await handle(message, '');
		assert.notEqual(message.replies.length, 0);
	});
});
