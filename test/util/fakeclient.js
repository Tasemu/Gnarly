'use strict';

import EventEmitter from 'events';

export default class extends EventEmitter {

	constructor () {
		super();
		this.messages = [];
	}

	sendMessage (channel, message, cb) {
		this.messages.push({channel, message});
		if (cb) cb();
	}

};
