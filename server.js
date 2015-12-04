'use strict';

import fs from 'fs';
import path from 'path';
import Discord from 'discord.js';
import bot from './bot';

const client = new Discord.Client();
let config;

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

bot.on('disconnected', () => {
	console.log('Disconnected, exiting!');
	process.exit(1);
});

client.login(config.auth.email, config.auth.password);
