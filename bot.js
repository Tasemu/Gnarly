'use strict';

import Bluebird from 'bluebird';

const agents = [
	require('./agents/motd.js')
];
const commands = {
	crafter: require('./commands/crafter.js'),
	items: require('./commands/items.js'),
	motd: require('./commands/motd.js'),
	ping: require('./commands/ping.js'),
	territories: require('./commands/territories.js')
};

export default (bot) => {
	bot.on('ready', () => {
		console.log('Gnarly is initialised and ready for use!');
		agents.forEach((agent) => agent.start(bot));
	});

	bot.on('message', async (message) => {
		if (message.content.substr(0, 1) !== '!') return;

		const reply = Bluebird.promisify(message.reply, {context: message});
		const structure = message.content.split(' ');
		const command = structure[0];
		const theRest = structure.slice(1, structure.length);
		const context = theRest.join(' ');

		if (command === '!help') {
			const help = Object.keys(commands).sort().map((key) => {
				const item = commands[key].help;
				return `\n!${key}${item.context ? ' ' + item.context : ''} :: ${item.info}`;
			});
			await reply(help.join(''));
		} else {
			const commandFn = commands[command.substring(1)];
			if (commandFn) {
				try {
					await commandFn.handle(message, context);
				} catch (err) {
					console.error(err);
				}
			}
		}
	});

	bot.on('disconnected', function () {
		console.log('Disconnected. Stopping agents!');
		agents.forEach((agent) => agent.stop());
	});

	bot.on('debug', function (message) {
		console.log(`Gnarly Debug Message: ${message}`);
	});

	bot.on('error', function (error) {
		console.error('Error Caught:', error);
	});

	return bot;
};
