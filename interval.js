'use strict';

var testMode = false;
var tokens = {};

module.exports.enableTestMode = function () {
	testMode = true;
};

module.exports.disableTestMode = function () {
	testMode = false;
	tokens = {};
};

module.exports.set = function (cb, frequency) {
	if (testMode) {
		var token = Math.floor(Math.random() * 1000000); // largeish random number
		tokens[token] = cb;
		return token;
	} else {
		return setInterval(cb, frequency);
	}
};

module.exports.clear = function (token) {
	if (testMode) {
		delete tokens[token];
	} else {
		return clearInterval(token);
	}
};

module.exports.trigger = function (token) {
	if (testMode) {
		return tokens[token]();
	} else {
		throw new Error('Can only call interval.trigger while in test mode.');
	}
};
