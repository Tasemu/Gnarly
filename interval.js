'use strict';

let testMode = false;
let tokens = {};

export function enableTestMode () {
	testMode = true;
};

export function disableTestMode () {
	testMode = false;
	tokens = {};
};

export function set (cb, frequency) {
	if (testMode) {
		var token = Math.floor(Math.random() * 1000000); // largeish random number
		tokens[token] = cb;
		return token;
	} else {
		return setInterval(cb, frequency);
	}
};

export function clear (token) {
	if (testMode) {
		delete tokens[token];
	} else {
		return clearInterval(token);
	}
};

export function trigger (token) {
	if (testMode) {
		return tokens[token]();
	} else {
		throw new Error('Can only call interval.trigger while in test mode.');
	}
};
