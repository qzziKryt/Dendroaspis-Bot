const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

exports.execute = async (client, message, args) => {
  try {
    let res = await fetch('https://some-random-api.ml/img/cat');
    if (!res.ok) {
      throw new Error(`HTTP error! Status: ${res.status}`);
    }

    let json = await res.json();
    
    const embed = new Discord.MessageEmbed()
      .setColor("#917898")
      .setTitle(`${message.guild.name}, котики :)`)
      .setImage(json.link);

    message.channel.send(embed);
  } catch (error) {
    console.error('An error occurred:', error);
    message.channel.send('An error occurred while processing the command.');
  }
}

exports.help = {
    name: "cat",
    aliases: [],
    usage: `cat`
}
