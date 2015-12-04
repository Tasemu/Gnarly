'use strict';

import assert from 'assert';
import Bluebird from 'bluebird';
import * as interval from '../../interval.js';
import * as agent from '../../agents/motd.js';
import FakeClient from '../util/fakeclient.js';

describe('./agents/motd.js', () => {
	beforeEach(() => {
		interval.enableTestMode();
	});

	afterEach(() => {
		interval.disableTestMode();
	});

	it('doesn\'t fail', async () => {
		const client = new FakeClient();
		const token = agent.start(client);
		await interval.trigger(token);
		assert.notEqual(client.messages.length, 0);
	});
});
