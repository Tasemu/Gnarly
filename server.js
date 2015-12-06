'use strict';

import Discord from 'discord.js';
import bot from './bot';

const client = new Discord.Client();

bot(client);

client.on('disconnected', () => {
	console.log('Disconnected, exiting!');
	process.exit(1);
});

client.login(process.env['GNARLY-LOGIN-EMAIL'], process.env['GNARLY-LOGIN-PASSWORD']);
