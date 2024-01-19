const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

exports.execute = async (client, message, args) => {
  let res = await fetch('https://some-random-api.ml/img/cat') // Добавлено await
    .then(res => res.json())
    .then(json => {
      const embed = new Discord.MessageEmbed()
        .setColor("#917898")
        .setTitle(`${message.guild.name}, котики :)`)
        .setImage(json.link);
      message.channel.send(embed);
    });
}


exports.help = {
    name: "cat",
    aliases: [],
    usage: `cat`
}
