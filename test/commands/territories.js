'use strict';

import assert from 'assert';
import {handle} from '../../commands/territories.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/territories.js', () => {
	it('doesn\'t fail', () => {
		const message = new FakeMessage('!territories');
		return handle(message, '').then(() => {
			assert.notEqual(message.replies.length, 0);
		});
	});
});
