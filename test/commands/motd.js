'use strict';

import assert from 'assert';
import {handle} from '../../commands/motd.js';
import FakeMessage from '../util/fakemessage.js';

describe('./commands/motd.js', () => {
	it('doesn\'t fail', () => {
		const message = new FakeMessage('!motd');
		return handle(message, '').then(() => {
			assert.notEqual(message.replies.length, 0);
		});
	});
});
