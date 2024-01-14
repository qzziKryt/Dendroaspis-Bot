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
    const matchPercentage = Math.floor(Math.random() * 99) + 1;

    // Создаем новое изображение с использованием Canvas
    const canvas = Canvas.createCanvas(400, 200);
    const context = canvas.getContext("2d");

    // Загружаем аватарки пользователей
    const avatar1 = await Canvas.loadImage(user1.displayAvatarURL({ format: 'png', size: 128 }));
    const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({ format: 'png', size: 128 }));

    // Рисуем аватарки на Canvas
    context.drawImage(avatar1, 90, 25, 100, 100);
    context.drawImage(avatar2, 210, 50, 100, 100);

    // Загружаем изображение для фона
    const backgroundImage = await Canvas.loadImage("https://cdn.discordapp.com/attachments/1117898899462561792/1196134715418226802/22cb5f35e7865988.png?ex=65b68643&is=65a41143&hm=62d830c2e357799f8adf3d94542133e2d362309b908fc38f0ac7275336f71318&"); // Замените на URL вашего изображения

    // Рисуем фон (изображение) поверх аватаров
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    context.font = "30px Arial";
    context.fillStyle = "#ffffff";
    context.fillText(`❤️`, 180, 90);

    context.font = "20px Arial";
    context.fillStyle = "ffffff";
    context.fillText(`${matchPercentage}%`, 175, 175);

    // Создаем вложение с изображением и отправляем его
    const attachment = new MessageAttachment(canvas.toBuffer(), "ship.png");
    const embed = new MessageEmbed()
      .setTitle("👫 Парочка")
      .setColor("#rrggbb")
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
