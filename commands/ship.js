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

    // Генерация рандомного процента совпадения от 1 до 100
    const matchPercentage = Math.floor(Math.random() * 99) + 1;

    let colorLove = "#ffffff";

    if (matchPercentage >= 50) colorLove = "#00ff00"; // Зеленый цвет
    else colorLove = "#ff0000"; // Красный цвет

    // Массив с вариациями фонового изображения
    const backgrounds = [
      {
        url: "https://cdn.discordapp.com/attachments/1117898899462561792/1196134715418226802/22cb5f35e7865988.png?ex=65b68643&is=65a41143&hm=62d830c2e357799f8adf3d94542133e2d362309b908fc38f0ac7275336f71318&",
        avatar1Position: { x: 60, y: 25 },
        avatar2Position: { x: 240, y: 25 }
      },
      {
        url: "https://cdn.discordapp.com/attachments/985517052460683294/1196844995701907466/maxresdefault.png?ex=65b91bc3&is=65a6a6c3&hm=a6b81175c10759df4b20114d1d7578fc6ce3547759c4c6f459d20abe2463e909&",
        avatar1Position: { x: 100, y: 25 },
        avatar2Position: { x: 200, y: 25 }
      },
      // Добавьте сколько угодно вариаций
    ];

    // Выбираем случайное фоновое изображение
    const randomBackground = backgrounds[Math.floor(Math.random() * backgrounds.length)];
    const backgroundImage = await Canvas.loadImage(randomBackground.url);

    // Создаем новое изображение с использованием Canvas
    const canvas = Canvas.createCanvas(400, 200);
    const context = canvas.getContext("2d");

    // Рисуем фоновое изображение
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Загружаем аватарки пользователей
    const avatar1 = await Canvas.loadImage(user1.displayAvatarURL({ format: 'png', size: 128 }));
    const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({ format: 'png', size: 128 }));

    // Рисуем аватарки на Canvas с учетом выбранного расположения
    context.drawImage(avatar1, randomBackground.avatar1Position.x, randomBackground.avatar1Position.y, 100, 100);
    context.drawImage(avatar2, randomBackground.avatar2Position.x, randomBackground.avatar2Position.y, 100, 100);

    context.font = "30px Arial";
    context.fillStyle = colorLove;
    context.fillText(`❤️`, 180, 90);

    context.font = "20px Arial";
    context.fillStyle = colorLove;
    context.fillText(`${matchPercentage}%`, 175, 175);

    // Создаем вложение с изображением и отправляем его
    const attachment = new MessageAttachment(canvas.toBuffer(), "ship.png");
    const embed = new MessageEmbed()
      .setTitle("👫 Парочка")
      .setColor(colorLove)
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
