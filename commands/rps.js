const { MessageEmbed } = require("discord.js");

const ROCK = "⛰️";
const PAPER = "📰";
const SCISSORS = "✂️";
const emojiArray = [ROCK, PAPER, SCISSORS];
const DISAPPOINTED = "😞";

exports.execute = async (client, message, args) => {
  try {
    const embedMsg = new MessageEmbed()
      .setColor("#9479A3")
      .setDescription("Камень, ножницы, бумага, 1, 2, 3!");

    const msg = await message.channel.send(embedMsg);
    const reacted = await promptMessage(msg, message.author, 30, emojiArray);

    // If they didn't respond back in time
    if (!reacted) {
      await msg.reactions.removeAll();
      return msg.edit(`Превышено время ожидания ${DISAPPOINTED}`);
    }

    const botChoice = emojiArray[Math.floor(Math.random() * emojiArray.length)];

    const result = getResult(reacted, botChoice);
    await msg.reactions.removeAll().catch((err) => {
      console.error("Не удалось удалить реакции: ", err);
    });

    embedMsg.setDescription("").addField(result, `${reacted} vs ${botChoice}`);
    msg.edit(embedMsg);
  } catch (error) {
    console.error(error);
  }
};

// Ваш код getResult и promptMessage здесь

async function promptMessage(message, author, time, validReactions) {
  time *= 1000; // Convert from s to ms

  async function setReactions() {
    for (const reaction of validReactions) {
      message.react(reaction).catch((err) => {
        message.channel.send("I had trouble reacting with those emojis...");
        console.error("promptMessage error: ", err);
      });
    }
  }

  await setReactions();

  const filter = (reaction, user) =>
    validReactions.includes(reaction.emoji.name) && user.id === author.id;

  return message
    .awaitReactions(filter, { max: 1, time: time })
    .then((collected) => collected.first() && collected.first().emoji.name)
    .catch((err) => {
      console.error("Error in promptMessage: ", err);
    });
}

function getResult(me, botChosen) {
  // User wins
  if (
    (me === ROCK && botChosen === SCISSORS) ||
    (me === PAPER && botChosen === ROCK) ||
    (me === SCISSORS && botChosen === PAPER)
  ) {
    return "Ты выиграл!";
  } else if (me === botChosen) {
    return "Ничья!";
  } else {
    return "Ты проиграл!";
  }
}

exports.help = {
    name: "rps",
    aliases: ["юзефа"],
    usage: `rps`
}
