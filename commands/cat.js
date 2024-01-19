const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

exports.execute = async (client, message, args) => {
    try {
        const catRequest = await fetch('https://api.thecatapi.com/v1/images/search');
        const response = await catRequest.json();

        const embed = new Discord.MessageEmbed()
            .setColor("#917898")
            .setTitle(`${message.guild.name}, котики :)`)
            .setImage(response[0].url);

        message.channel.send(embed);
    } catch (error) {
        console.error("Error executing cat command:", error);
        message.reply("An error occurred while processing the command.");
    }
};

exports.help = {
    name: "cat",
    aliases: [],
    usage: `cat`
};
