exports.execute = (client, message, args) => {
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Мой префикс для этого сервера **${client.prefix}**.`);
    let prefix = args[0];
    if (!prefix) {
        client.db.delete(`prefix_${message.guild.id}`);
        return message.channel.send(`✅ | Префикс для этого сервера был сброшен.`);
    } else {
        let setTo = client.db.set(`prefix_${message.guild.id}`, prefix);
        return message.channel.send(`✅ | Префикс установлен на \`${setTo}\`.`);
    }
}

exports.help = {
    name: "prefix",
    aliases: ["setprefix"],
    usage: `prefix`
}
