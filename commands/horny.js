const { MessageEmbed, MessageAttachment } = require("discord.js");
const fetch = require('node-fetch');
const fs = require("fs");

exports.execute = (client, message, args) => {
  if (!message.mentions.users.size) { // если написано $wasted, то показываем аватарку автора сообщения
 	let link = `https://some-random-api.ml/canvas/gay/?avatar=${message.author.avatarURL({ format: 'png'})}` // Считываем эффект и говорим что картинка для эффекта - аватарка
	const attachmentt = new MessageAttachment(link, 'horny.gif');
 	const embed = new MessageEmbed()
	 .setTitle(`${message.author.username} horny!`)
	 .attachFiles(attachmentt)
    	 .setColor('#rrggbb')
	 .setImage('attachment://horny.gif')
	return message.channel.send(embed);
	}
	const WastedList = message.mentions.users.map(user => { // Если написали $wasted @test, то показываем триггер аватарки пользователя test
	let link = `https://some-random-api.ml/canvas/gay/?avatar=${user.avatarURL({ format: 'png'})}`
  	const attachmentt = new MessageAttachment(link, 'horny.gif');
	const embed = new MessageEmbed()
  	 .setTitle(`${user.username} horny!`)
  	 .attachFiles(attachmentt)
         .setColor("#rrggbb")
  	 .setImage('attachment://horny.gif')
  	return embed
	});
	message.channel.send(WastedList);
	return
}

exports.help = {
    name: "horny",
    aliases: [""],
    usage: `horny @user`
}
