const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
    let sms = args.join(" ");
	  message.channel.bulkDelete(1);
		message.channel.send(sms);
}

exports.help = {
    name: "say",
    aliases: ["s"],
    usage: `say сообщение`
}
