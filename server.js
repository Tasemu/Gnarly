'use strict';

var fs = require('fs');
var path = require('path');
var Discord = require('discord.js');
var bot = require('./bot');
var client = new Discord.Client();
var config;

try {
	config = JSON.parse(fs.readFileSync(path.join(__dirname, './config.json'), 'UTF-8'));
} catch (err) {
	if (err.code === 'ENOENT') {
		  // no config file is present; this is probably a development environment
		  config = { auth: {} };
	} else {
		  throw err;
	}
}

bot(client, config);
client.login(config.auth.email, config.auth.password);
