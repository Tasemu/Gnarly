'use strict';

import Bluebird from 'bluebird';

export default class {

	constructor (content) {
		this.replies = [];
		this.content = content;
	}

	reply (text, cb) {
		this.replies.push(text);
		if (cb) cb();
	}

	replyp (text) {
		this.reply(text);
		return Bluebird.resolve();
	}

};
