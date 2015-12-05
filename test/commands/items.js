'use strict';

import assert from 'assert';
import {handle} from '../../commands/items.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/items.js', () => {
	it('doesn\'t fail', async () => {
		const message = new FakeMessage('!items');
		await handle(message, '');
		assert.notEqual(message.replies.length, 0);
	});
});
