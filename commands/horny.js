const { MessageEmbed, MessageAttachment } = require("discord.js");
const fetch = require('node-fetch');
const fs = require("fs");

exports.execute = async (client, message, args) => {
  try {
    if (!message.mentions.users.size) {
      let link = `https://some-random-api.ml/canvas/gay/?avatar=${message.author.avatarURL({ format: 'png'})}`;
      console.log(link); // Log the link to the console
      const attachmentt = new MessageAttachment(link, 'horny.gif');
      const embed = new MessageEmbed()
        .setTitle(`${message.author.username} horny!`)
        .attachFiles(attachmentt)
        .setColor('#FF5733') // Replace with a valid hex color code
        .setImage('attachment://horny.gif');
      return message.channel.send(embed);
    }

    const WastedList = message.mentions.users.map(user => {
      let link = `https://some-random-api.ml/canvas/gay/?avatar=${user.avatarURL({ format: 'png'})}`;
      console.log(link); // Log the link to the console
      const attachmentt = new MessageAttachment(link, 'horny.gif');
      const embed = new MessageEmbed()
        .setTitle(`${user.username} horny!`)
        .attachFiles(attachmentt)
        .setColor("#FF5733") // Replace with a valid hex color code
        .setImage('attachment://horny.gif');
      return embed;
    });

    message.channel.send(WastedList);
  } catch (error) {
    console.error("Error in 'horny' command:", error);
    message.channel.send("An error occurred while processing the command.");
  }
}

exports.help = {
    name: "horny",
    aliases: [""],
    usage: `horny @user`
}
