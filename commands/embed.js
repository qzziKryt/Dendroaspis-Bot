const Discord = require("discord.js");
const { MessageEmbed } = require("discord.js");

exports.execute = async (client, message, args) => {
  try {
    const filter = (msg) => msg.author.id == message.author.id;
    const options = {
      max: 1,
    };
    
    let stopLoop = false;

    if (!message.member.hasPermission("ADMINISTRATOR")) {
      return message.channel.send("У вас недостаточно прав.");
    }

    let embedMsg = await message.channel.send(
      "Вы хотите изменить Title? Введите ваш контент или \`skip\` или \`cancel\`."
    );

    await embedMsg.react("⏩");
    await embedMsg.react("❌");

    const reactionFilter = (reaction, user) => {
      return ["⏩", "❌"].includes(reaction.emoji.name) && user.id === message.author.id;
    };

    const collector = embedMsg.createReactionCollector(reactionFilter, { time: 60000 });

    collector.on('collect', async (reaction) => {
      if (reaction.emoji.name === '⏩') {
        switch (step.stepName) {
          case "Footer Image":
            embed[step.propName](embed.footer ? embed.footer.text : "", content);
            break;
          case "Author Image":
            embed[step.propName](embed.author ? embed.author.name : "", content);
            break;
          default:
            // Replace ^ with < and >
            content = content.replace(/\^/g, "<");
            embed[step.propName](content);
            break;
        }
      } else if (reaction.emoji.name === '❌') {
        stopLoop = true;
      }
    });


    const embed = new Discord.MessageEmbed();

    const steps = [
      { stepName: "Title", propName: "setTitle" },
      { stepName: "Description", propName: "setDescription" },
      { stepName: "Color", propName: "setColor" },
      { stepName: "Footer", propName: "setFooter" },
      { stepName: "Footer Image", propName: "setFooter" },
      { stepName: "Image", propName: "setImage" },
      { stepName: "Author Field", propName: "setAuthor" },
      { stepName: "Author Image", propName: "setAuthor" },
      { stepName: "Timestamp", propName: "setTimestamp" },
    ];

    for (const step of steps) {
      if (stopLoop) break;

      embedMsg.edit(
        `Вы хотите изменить ${step.stepName}? Введите ваш контент или \`skip\` или \`cancel\`.`
      );

      const response = await message.channel.awaitMessages(filter, options);
      let content = response.first().content;

      if (content.toLowerCase() === "cancel") {
        response.first().delete();
        stopLoop = true;
      }

      if (content.toLowerCase() !== "skip" && !stopLoop) {
        switch (step.stepName) {
          case "Footer Image":
            embed[step.propName](embed.footer ? embed.footer.text : "", content);
            break;
          case "Author Image":
            embed[step.propName](embed.author ? embed.author.name : "", content);
            break;
          default:
            // Replace ^ with < and >
            content = content.replace(/\^/g, "<");
            embed[step.propName](content);
            break;
        }
      }

      // Delete user's message after processing
      response.first().delete();
    }

    // Ask for channel to send the embed
    if (!stopLoop) {
      embedMsg.edit(
        "Пожалуйста, укажите канал для отправки этого встроенного сообщения. 📝"
      );
      let channelMsg = await message.channel.awaitMessages(filter, options);
      const mentionedChannel = channelMsg.first().mentions.channels.first();
      if (channelMsg.first().content.toLowerCase() === "delete")
        return embedMsg.edit("Удаленно.");
      if (!mentionedChannel) {
        message.channel.send("Канал не найден. 💀");
      }

      // Send the embed
      mentionedChannel.send(embed);
    }
  } catch (error) {
    console.error(error);
  }
};

exports.help = {
  name: "embed",
  aliases: ["emb"],
  usage: `embed`,
};
