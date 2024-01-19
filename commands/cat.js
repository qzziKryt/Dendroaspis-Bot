const Discord = module.require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');
const { request } = require('undici');

exports.execute = async (client, message, args) => {

    const catRequest = await request('https://api.thecatapi.com/v1/images/search');
    const response = await getJSONResponse(catRequest.body);
    
    const embed = new Discord.MessageEmbed()
      .setColor("#917898")
      .setTitle(`${message.guild.name}, котики :)`)
      .setImage(response[0].url);
    message.channel.send(embed);
} 

exports.help = {
    name: "cat",
    aliases: [],
    usage: `cat`
}
