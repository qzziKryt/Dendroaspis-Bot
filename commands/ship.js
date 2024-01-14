const { MessageAttachment, MessageEmbed } = require("discord.js");
const Canvas = require("canvas");

exports.execute = async (client, message, args) => {
  try {
    // Проверяем, есть ли упоминание двух пользователей в сообщении
    if (message.mentions.users.size !== 2) {
      return message.channel.send("Пожалуйста, упомяните двух пользователей для генерации картинки.");
    }

    // Получаем пользователей
    const user1 = message.mentions.users.first();
    const user2 = message.mentions.users.last();

    // Генерация рандомного процента совпадения от 0 до 100
    const matchPercentage = Math.floor(Math.random() * 101);

    // Создаем новое изображение с использованием canvas
    const canvas = Canvas.createCanvas(400, 200);
    const context = canvas.getContext("2d");

    // Рисуем текст и изображения на canvas
    context.fillStyle = "#ffffff";
    context.fillRect(0, 0, canvas.width, canvas.height);

    // Загружаем аватарки пользователей
    const avatar1 = await Canvas.loadImage(user1.displayAvatarURL({ format: 'png', size: 128 }));
    const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({ format: 'png', size: 128 }));

    // Рисуем аватарки на canvas
    context.drawImage(avatar1, 50, 25, 100, 100);
    context.drawImage(avatar2, 250, 25, 100, 100);

    context.font = "30px Arial";
    context.fillStyle = "#000000";
    context.fillText(`❤️`, 180, 90);

    context.font = "20px Arial";
    context.fillStyle = "#000000";
    context.fillText(`Совпадение: ${matchPercentage}%`, 50, 175);

    // Создаем вложение с изображением и отправляем его
    const attachment = new MessageAttachment(canvas.toBuffer(), "ship.png");
    const embed = new MessageEmbed()
      .setTitle("Генерация картинки")
      .setColor("#rrggbb")
      .setDescription(`Совпадение между ${user1.tag} и ${user2.tag}: ${matchPercentage}%`)
      .attachFiles(attachment)
      .setImage("attachment://ship.png");

    message.channel.send(embed);
  } catch (error) {
    console.error("Ошибка выполнения команды:", error);
    message.channel.send("Произошла ошибка при обработке команды.");
  }
}

exports.help = {
    name: "ship",
    aliases: [""],
    usage: `ship`
}
