exports.commands = [
	"talk",
	"chatterb"
]

var cleverbot = require("cleverbot-node");
talkbot = new cleverbot;
cleverbot.prepare(function(){});

exports.talk = {
	usage : "<message>",
	description : "Talk directly to the bot",
	process : function(bot,msg, suffix) {
			var conv = suffix.split(" ");
			talkbot.write(conv, function (response) {
			bot.sendMessage(msg.channel, response.message)
			})
	}
}

exports.chatterb = {
	usage : "<message>",
	description : "Talk directly to the bot",
	process : function(bot,msg, suffix) {
			var conv = suffix.split(" ");
			talkbot.write(conv, function (response) {
			bot.sendMessage(msg.channel, "!chatterb " + response.message)
			})
	}
}