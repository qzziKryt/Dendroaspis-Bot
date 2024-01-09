const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  try {
    const embed1 = new MessageEmbed()
      .setTitle("Список Emoji")
      .addField("<a:9410pinkarrow:1194324464104636416>", "`^a:9410pinkarrow:1194324464104636416>`", true)
      .addField("<a:6069pixelhearts:1194304144740192396>", "`^a:6069pixelhearts:1194304144740192396>`", true)
      .addField("<:7473rules:1194330121432219758>", "`^:7473rules:1194330121432219758>`", true)
      // NUMBERS
      .addField("<a:0_:1194374224530391112>", "^a:0_:1194374224530391112>", true)
      .addField("<a:1_:1194374394202574909>", "^a:1_:1194374394202574909>", true)
      .addField("<a:2_:1194373681988771942>", "^a:2_:1194373681988771942>", true)
      .addField("<a:3_:1194373675357573171>", "^a:3_:1194373675357573171>", true)
      .addField("<a:4_:1194373687814672434>", "^a:4_:1194373687814672434>", true)
      .addField("<a:5_:1194373669657518170>", "^a:5_:1194373669657518170>", true)
      .addField("<a:6_:1194373594290077696>", "^a:6_:1194373594290077696>", true)
      .addField("<a:7_:1194373697562218647>", "^a:7_:1194373697562218647>", true)
      .addField("<a:8_:1194373610127769751>", "^a:8_:1194373610127769751>", true)
      .addField("<a:9_:1194373581128343712>", "^a:9_:1194373581128343712>", true)
      .addField("<a:2363dotrgb:1194395784725151774>", "^a:2363dotrgb:1194395784725151774>", true)
      .addField("<a:2950symbolcolon:1194398648872734750>", "^a:2950symbolcolon:1194398648872734750>", true)
      .setColor("#rrggbb")
      .setFooter("Страница 1")
      .setTimestamp();
    let embedMsg = await message.channel.send(embed1);

    await embedMsg.react('1️⃣');
    await embedMsg.react('2️⃣');
    await embedMsg.react('3️⃣');

    const filter = (reaction, user) => {
      return ['1️⃣', '2️⃣'].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    const collector = embedMsg.createReactionCollector(filter, { time: 60000 });

    collector.on('collect', async (reaction) => {
      if (reaction.emoji.name === '1️⃣') {
        await embedMsg.edit(embed1);
        reaction.users.remove(message.author.id);
      } else if (reaction.emoji.name === '2️⃣') {
        const embed2 = new MessageEmbed()
          .setTitle("Список Emoji")
          .addField("<:9672dotblue:1194397031695908975>", "^:9672dotblue:1194397031695908975>", true)
          .addField("<a:rflx_a:1194373632571473983>", "^a:rflx_a:1194373632571473983>", true)
          .addField("<a:rflx_b:1194373604352204953>", "^a:rflx_b:1194373604352204953>", true)
          .addField("<a:rflx_c:1194373616163369000>", "^a:rflx_c:1194373616163369000>", true)
          .addField("<a:rflx_d:1194373662669799434>", "^a:rflx_d:1194373662669799434>", true)
          .addField("<a:rflx_e:1194373623989932093>", "^a:rflx_e:1194373623989932093>", true)
          .addField("<a:rflx_f:1194373587763744939>", "^a:rflx_f:1194373587763744939>", true)
          .addField("<a:rflx_g:1194373743955410994>", "^a:rflx_g:1194373743955410994>", true)
          .addField("<a:rflx_h:1194373641169805344>", "^a:rflx_h:1194373641169805344>", true)
          .addField("<a:rflx_i:1194373692914925608>", "^a:rflx_i:1194373692914925608>", true)
          .addField("<a:rflx_j:1194373584433467472>", "^a:rflx_j:1194373584433467472>", true)
          .addField("<a:rflx_k:1194373759574999091>", "^a:rflx_k:1194373759574999091>", true)
          .addField("<a:rflx_l:1194373752063004672>", "^a:rflx_l:1194373752063004672>", true)
          .addField("<a:rflx_m:1194373765375737956>", "^a:rflx_m:1194373765375737956>", true)
          .addField("<a:rflx_n:1194373647557730334>", "^a:rflx_n:1194373647557730334>", true)
          .setColor("#rrggbb")
          .setFooter("Страница 2")
          .setTimestamp();
        await embedMsg.edit(embed2);
        reaction.users.remove(message.author.id);
      } else if (reaction.emoji.name === '3️⃣') {
        const embed3 = new MessageEmbed()
          .setTitle("Список Emoji")
          .addField("<a:rflx_o:1194373655438831737>", "^a:rflx_o:1194373655438831737>", true)
          .addField("<a:rflx_p:1194373599809765448>", "^a:rflx_p:1194373599809765448>", true)
          .addField("<a:rflx_q:1194373712590405712>", "^a:rflx_q:1194373712590405712>", true)
          .addField("<a:rflx_r:1194373651223556148>", "^a:rflx_r:1194373651223556148>", true)
          .addField("<a:rflx_s:1194373636421861482>", "^a:rflx_s:1194373636421861482>", true)
          .addField("<a:rflx_t:1194373721482334238>", "^a:rflx_t:1194373721482334238>", true)
          .addField("<a:rflx_u:1194373726247059476>", "^a:rflx_u:1194373726247059476>", true)
          .addField("<a:rflx_v:1194373736053350492>", "^a:rflx_v:1194373736053350492>", true)
          .addField("<a:rflx_w:1194373717774569553>", "^a:rflx_w:1194373717774569553>", true)
          .addField("<a:rflx_x:1194373705640464525>", "^a:rflx_x:1194373705640464525>", true)
          .addField("<a:rflx_y:1194373731431227442>", "^a:rflx_y:1194373731431227442>", true)
          .addField("<a:rflx_z:1194373576405553243>", "^a:rflx_z:1194373576405553243>", true)
          .setColor("#rrggbb")
          .setFooter("Страница 3")
          .setTimestamp();
        await embedMsg.edit(embed3);
        reaction.users.remove(message.author.id);
    });
  } catch (error) {
    console.error(error);
  }
};

exports.help = {
  name: "list",
  aliases: ["l", "emoji"],
  usage: `list`
};
