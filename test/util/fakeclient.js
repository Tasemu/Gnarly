'use strict';

var EventEmitter = require('events');

module.exports = class extends EventEmitter {

	constructor () {
		super();
		this.messages = [];
	}

	sendMessage (channel, message) {
		this.messages.push({channel: channel, message: message});
	}

};
