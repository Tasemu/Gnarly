var Discord = require('discord.js');
var GoogleSpreadsheet = require('google-spreadsheet');
var config = require('./config.json');
var bot = new Discord.Client();
var spreadsheet = new GoogleSpreadsheet('1H2rDTyrg4g1sGVbiWMW7dL-YEzQ4RJX7eD9dZNbrhHk');

bot.on('ready', function () {
	console.log('Gnarly is initialised and ready for use!');
});

bot.on('message', function (message) {

	if (message.content.substr(0, 1) !== '!') return;
	var structure = message.content.split(' ');
	var command = structure[0];
	var context = structure[1];

	if (command === '!ping') {
		message.reply('pong');
	}

	if (command === '!motd') {
		spreadsheet.getRows(1, function (err, data) {
			data.forEach(function (row) {
				if (row.name === "MOTD") message.reply(row.message);
			});
		});
	}

	if (command === '!territories') {
		spreadsheet.getRows(2, function (err, data) {
			data.forEach(function (row) {
				message.reply(row.territory + " :: " + row.timer);
			});
		});
	}

});

bot.on('disconnected', function () {
	console.log('Disconnected, exiting!');
	process.exit(1);
});

bot.on("debug", function (message) {
	console.log("Gnarly Debug Message: " + message);
});

bot.on("error", function (error) {
	console.log("Error Caught: " + error);
});

bot.login(config.auth.email, config.auth.password);