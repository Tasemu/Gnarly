var Discord = require('discord.js');
var GoogleSpreadsheet = require('google-spreadsheet');
var moment = require('moment');
var config = require('./config.json');
var bot = new Discord.Client();
var spreadsheet = new GoogleSpreadsheet('1H2rDTyrg4g1sGVbiWMW7dL-YEzQ4RJX7eD9dZNbrhHk');

function startMOTDTimer() {
	setInterval(function () {
		spreadsheet.getRows(1, function (err, data) {
			data.forEach(function (row) {
				if (row.name === "MOTD") bot.sendMessage("108312291618885632", row.message);;
			});
		});
	}, (10800 * 1000));
}

bot.on('ready', function () {
	console.log('Gnarly is initialised and ready for use!');
	startMOTDTimer();
});

bot.on('message', function (message) {

	if (message.content.substr(0, 1) !== '!') return;
	var structure = message.content.split(' ');
	var command = structure[0];
	var theRest = structure.slice(1, structure.length);
	var context = theRest.join(" ");

	if (command === '!ping') {
		message.reply('pong');
	}

	if (command === '!help') {
		var commands = [
			{ command: '!ping', info: "Replies with pong" },
			{ command: '!motd', info: "Replies with the current Message of the Day!" },
			{ command: '!territories', info: "Replies with the guilds current territories and their food timers" },
			{ command: '!crafter <item>', info: "Replies with the guild crafters for the queried item" },
			{ command: '!items', info: "Lists all items available for use with other commands" }
		];

		var help = commands.map(function (item) {
			return ("\n" + item.command + " :: " + item.info);
		});

		message.reply(help.join(''));
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
			var territories = data.map(function (row) {
				var time = moment(row.lastfed)
					.add(row.days, 'days')
					.add(row.hours, 'hours')
					.add(row.minutes, 'minutes');
				return ("\n" + row.territory + " :: " + moment().to(time));
			});
			message.reply(territories.join(''));
		});
	}

	if (command === '!crafter') {
		spreadsheet.getRows(3, function (err, data) {
			data.forEach(function (row) {
				if (context.toLowerCase() === row.item.toLowerCase()) {
					message.reply("Guild crafters for: " + row.item, false, function () {
						message.reply("Primary: " + row.primarycrafter);
						message.reply("Secondary: " + row.secondarycrafter);
						message.reply("Tertiary: " + row.tertiarycrafter);
					});
				}
			});
		});
	}

	if (command === '!items') {
		spreadsheet.getRows(3, function (err, data) {
			var items = data.map(function (row) {
				return ("\n" + row.item.toLowerCase());
			});
			message.reply(items.join(''));
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