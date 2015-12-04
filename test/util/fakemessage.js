'use strict';

export default class {

	constructor (content) {
		this.replies = [];
		this.content = content;
	}

	reply (text, cb) {
		this.replies.push(text);
		if (cb) cb();
	}

};
