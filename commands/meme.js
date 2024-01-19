const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");
const fetch = require('node-fetch');

exports.execute = async (client, message, args) => {
    try {
        
        const Reds = [
            "memes",
            "me_irl",
            "dankmemes",
            "comedyheaven",
            "Animemes"
        ];

        const Rads = Reds[Math.floor(Math.random() * Reds.length)];

        const res = await fetch(`https://www.reddit.com/r/${Rads}/random/.json`);

        const json = await res.json();

        if (!json[0]) return message.channel.send(`Your Life Lmfao`);

        const data = json[0].data.children[0].data;

        const Embed = new MessageEmbed()
            .setColor("rrggbb")
            .setURL(`https://reddit.com${data.permalink}`)
            .setTitle(data.title)
            .setDescription(`Author : ${data.author}`)
            .setImage(data.url)
            .setFooter(`${data.ups || 0} 👍 | ${data.downs || 0} 👎 | ${data.num_comments || 0} 💬`)
            .setTimestamp();

        return message.channel.send(Embed);
    } catch (error) {
        console.error("Error executing meme command:", error);
        message.reply("An error occurred while processing the command.");
    }
};

exports.help = {
    name: "meme",
    aliases: [],
    usage: `meme`
};
