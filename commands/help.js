const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
    let user = message.mentions.users.first() || message.author;
    const embed = new MessageEmbed()
        .setTitle(`Команды`)
        .setDescription(`Всего команд: ${client.commands.size}`)
        .setColor("#rrggbb")
        .setTimestamp()
        .setFooter(message.author.tag, message.author.displayAvatarURL());
    client.commands.forEach(cmd => {
        embed.addField(`${cmd.help.name}`, `Псевдонимы: ${cmd.help.aliases.join(", ") || "None"}\nПрименение: \`${client.prefix}${cmd.help.usage}\``, true);
    });
    return message.channel.send(embed);
}

exports.help = {
    name: "help",
    aliases: ["h"],
    usage: `help`
}
