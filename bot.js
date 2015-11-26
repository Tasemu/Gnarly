var Discord = require('discord');
var config = require('./config.json');
var bot = new Discord.client();

bot.on('ready', function () {
	console.log('Gnarly is initialised and ready for use!');
});

bot.on('message', function (message) {});
bot.on('disconnected', function () {});
bot.on('error', function (err) {});

bot.login(config.auth.email, config.auth.password);