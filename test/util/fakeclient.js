'use strict';

import EventEmitter from 'events';

export default class extends EventEmitter {

	constructor () {
		super();
		this.messages = [];
	}

	sendMessage (channel, message) {
		this.messages.push({channel, message});
	}

};
