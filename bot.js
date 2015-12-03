var Discord = require('discord.js');
var GoogleSpreadsheet = require('google-spreadsheet');
var config = require('./config.json');
var spreadsheet = require('./spreadsheet.js');
var bot = new Discord.Client();
var agents = [
  require('./agents/motd.js')
];
var commands = {
  crafter: require('./commands/crafter.js'),
  help: require('./commands/help.js'),
  items: require('./commands/items.js'),
  motd: require('./commands/motd.js'),
  ping: require('./commands/ping.js'),
  territories: require('./commands/territories.js')
};

bot.on('ready', function () {
	console.log('Gnarly is initialised and ready for use!');
	agents.forEach(function (agent) {
		agent(bot);
	});
});

bot.on('message', function (message) {
	if (message.content.substr(0, 1) !== '!') return;
	var structure = message.content.split(' ');
	var command = structure[0];
	var theRest = structure.slice(1, structure.length);
	var context = theRest.join(' ');

	if (command === '!help') {
		var help = Object.keys(commands).sort().map(function (key) {
			var item = commands[key].help;
			return '\n!' + key + (item.context ? ' ' + item.context : '') + ' :: ' + item.info;
		});
		message.reply(help.join(''));
	} else {
		var commandFn = commands[command.substring(1)];
		if (commandFn) commandFn(message, context);
	}
});

bot.on('disconnected', function () {
	console.log('Disconnected, exiting!');
	process.exit(1);
});

bot.on('debug', function (message) {
	console.log('Gnarly Debug Message: ' + message);
});

bot.on('error', function (error) {
	console.error('Error Caught: ' + error);
});

bot.login(config.auth.email, config.auth.password);
