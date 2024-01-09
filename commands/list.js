const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  const embed1 = new MessageEmbed()
    .setTitle("Список Emoji")
    .addField("<a:9410pinkarrow:1194324464104636416>", "`^a:9410pinkarrow:1194324464104636416>`", true)
    .addField("<a:6069pixelhearts:1194304144740192396>", "`^a:6069pixelhearts:1194304144740192396>`", true)
    .addField("<:7473rules:1194330121432219758>", "`^:7473rules:1194330121432219758>`", true)
    // NUMBERS
    .addField("<a:0_:1194374224530391112>", "`^a:0_:1194374224530391112>`", true)
    .addField("<a:1_:1194374394202574909>", "`^a:1_:1194374394202574909>`", true)
    .addField("<a:2_:1194373681988771942>", "`^a:2_:1194373681988771942>`", true)
    .addField("<a:3_:1194373675357573171>", "`^a:3_:1194373675357573171>`", true)
    .addField("<a:4_:1194373687814672434>", "`^a:4_:1194373687814672434>`", true)
    .addField("<a:5_:1194373669657518170>", "`^a:5_:1194373669657518170>`", true)
    .addField("<a:6_:1194373594290077696>", "`^a:6_:1194373594290077696>`", true)
    .addField("<a:7_:1194373697562218647>", "`^a:7_:1194373697562218647>`", true)
    .addField("<a:8_:1194373610127769751>", "`^a:8_:1194373610127769751>`", true)
    .addField("<a:9_:1194373581128343712>", "`^a:9_:1194373581128343712>`", true)
    // LETTERS
    .setColor("#rrggbb")
    .setFooter("Страница 1")
    .setTimestamp();
  let embedMsg = await message.channel.send(embed1);
      // Добавление двух реакций
  await embedMsg.react('1️⃣');
  await embedMsg.react('2️⃣');

    // Создание коллектора реакций
  const filter = (reaction, user) => {
    return ['👍', '👎'].includes(reaction.emoji.name) && user.id === message.author.id;
  };

  const collector = embedMsg.createReactionCollector(filter, { time: 60000 }); // Настройка времени жизни коллектора
  
  collector.on('collect', (reaction) => {
    if (reaction.emoji.name === '1️⃣') {
      embedMsg.edit(embed1);
    } else if (reaction.emoji.name === '2️⃣') {
      const embed2 = new MessageEmbed()
        .setTitle("Список Emoji")
        .setColor("#rrggbb")
        .setFooter("Страница 2")
        .setTimestamp();
      embedMsg.edit(embed2);
    }
  });
  
}

exports.help = {
    name: "list",
    aliases: ["l", "emoji"],
    usage: `list`
}
