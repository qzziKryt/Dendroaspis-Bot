const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  const embed = new MessageEmbed()
    .setTitle("Список Emoji")
    .addField("<a:9410pinkarrow:1194324464104636416>", "`^a:9410pinkarrow:1194324464104636416>`", true)
    .addField("<a:6069pixelhearts:1194304144740192396>", "`^a:6069pixelhearts:1194304144740192396>`", true)
    .addField("<:7473rules:1194330121432219758>", "`^:7473rules:1194330121432219758>`", true)
    .setColor("#rrggbb")
    .setTimestamp();
  message.channel.send(embed);
}

exports.help = {
    name: "list",
    aliases: ["l", "emoji"],
    usage: `list`
}
