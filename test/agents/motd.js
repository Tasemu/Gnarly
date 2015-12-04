var assert = require('assert');
var Bluebird = require('bluebird');
var interval = require('../../interval.js');
var agent = require('../../agents/motd.js');
var FakeClient = require('../util/fakeclient.js');

describe('./agents/motd.js', function () {
	beforeEach(function () {
		interval.enableTestMode();
	});

	afterEach(function () {
		interval.disableTestMode();
	});

	it('doesn\'t fail', function () {
		var client = new FakeClient();
		return Bluebird.resolve()
			.then(function () {
				var token = agent.start(client);
				return interval.trigger(token);
			})
			.then(function () {
				assert.notEqual(client.messages.length, 0);
			});
	});
});
