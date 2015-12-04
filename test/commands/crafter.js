'use strict';

import assert from 'assert';
import {handle} from '../../commands/crafter.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/crafter.js', () => {
	it('doesn\'t fail', () => {
		const message = new FakeMessage('!crafter light cloth');
		return handle(message, 'light cloth').then(() => {
			assert.notEqual(message.replies.length, 0);
		});
	});
});
