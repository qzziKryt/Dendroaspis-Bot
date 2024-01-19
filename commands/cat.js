const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch')

exports.execute = (client, message, args) => {
  let res = fetch('https://some-random-api.ml/img/cat') //Извлекаем json от сайта
  .then(res => res.json()) // Просматриваем текст
  .then(json => {
    const embed = new Discord.MessageEmbed()
     .setColor("#917898")
     .setTitle(`${message.guild.name}, котики :)`)
     .setImage(json.link) // Ставим лисичку картинкой!
    message.channel.send(embed); // Отсылаем сообщение
  }
}

exports.help = {
    name: "cat",
    aliases: [],
    usage: `cat`
}
