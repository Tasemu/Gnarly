'use strict';

import assert from 'assert';
import {handle} from '../../commands/crafter.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/crafter.js', () => {
	it('doesn\'t fail', async () => {
		const message = new FakeMessage('!crafter light cloth');
		await handle(message, 'light cloth');
		assert.notEqual(message.replies.length, 0);
	});
});
