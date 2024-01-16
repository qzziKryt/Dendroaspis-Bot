const { MessageAttachment, MessageEmbed } = require("discord.js");
const Canvas = require("canvas");

function getLoveColor(percentage) {
  // Преобразование процента в оттенок зеленого
  const hue = percentage * 1.2; // Умножаем на 1.2 для более зеленого оттенка
  const saturation = 100;
  const lightness = 50;

  // Преобразование HSV в RGB
  const c = (1 - Math.abs(2 * lightness - 1)) * saturation;
  const x = c * (1 - Math.abs((hue / 60) % 2 - 1));
  const m = lightness - c / 2;
  let red = 0,
    green = 0,
    blue = 0;

  if (0 <= hue && hue < 60) {
    red = c;
    green = x;
  } else if (60 <= hue && hue < 120) {
    red = x;
    green = c;
  } else if (120 <= hue && hue < 180) {
    green = c;
    blue = x;
  } else if (180 <= hue && hue < 240) {
    green = x;
    blue = c;
  } else if (240 <= hue && hue < 300) {
    red = x;
    blue = c;
  } else if (300 <= hue && hue < 360) {
    red = c;
    blue = x;
  }

  // Преобразование значений RGB от 0 до 255
  red = Math.round((red + m) * 255);
  green = Math.round((green + m) * 255);
  blue = Math.round((blue + m) * 255);

  // Возвращаем цвет в формате RGB
  return `rgb(${red},${green},${blue})`;
}

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
    const matchPercentage = Math.floor(Math.random() * 100) + 1;

    // Получаем цвет в зависимости от процента
    const colorLove = getLoveColor(matchPercentage);

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

    // Загружаем аватарки пользователей
    const avatar1 = await Canvas.loadImage(user1.displayAvatarURL({ format: 'png', size: 128 }));
    const avatar2 = await Canvas.loadImage(user2.displayAvatarURL({ format: 'png', size: 128 }));

    // Рисуем фоновое изображение
    context.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);

    // Устанавливаем режим наложения, чтобы фон был поверх аватарок
    context.globalCompositeOperation = 'destination-over';

    // Рисуем аватарки на Canvas с учетом выбранного расположения
    context.drawImage(avatar1, randomBackground.avatar1Position.x, randomBackground.avatar1Position.y, 100, 100);
    context.drawImage(avatar
