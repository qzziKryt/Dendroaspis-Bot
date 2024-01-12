const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  const wallpapers = [
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418291930419240/this-is-my-kingdom-cum-cumming.gif?ex=65b3eb0a&is=65a1760a&hm=227a7478299f97b6f3ca513da539714b72a6e4d0786c973a79f4b9bb3e38c08b&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418848631984138/nut-cum.gif?ex=65b3eb8f&is=65a1768f&hm=15cf03db49405bc9b7fd7569f9eea7c188401526f6bbb410fc69e63f9887e80a&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418866847858769/ejaculation-explosion.gif?ex=65b3eb93&is=65a17693&hm=dca595dc205cd0f1b3dc5d09bbecf6e5ec3fb676634b69ec172f8783101bc535&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418891724279808/gaviscon-kingdom-come.gif?ex=65b3eb99&is=65a17699&hm=9dfe88a16caa50b279e0f93e19381243522463c0d11f60988742299ddee8eaff&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418902402961418/cum.gif?ex=65b3eb9c&is=65a1769c&hm=7b2444ba1af4cde7051162a2644c8d9f9bcc2d9371a6bbc0c12b1b1ec7eccbc3&"
  ];
  
  let user = message.mentions.users.first();
  let embedMsg;
  const response = wallpapers[Math.floor(Math.random() * wallpapers.length)];
  
  const embed = new MessageEmbed()
    .setTitle('cum')
    .setColor(`#rrggbb`)
    .setImage(`${response}`);
  
  if (!user) {
    embedMsg = embed;
  } else {
    embedMsg = new MessageEmbed()
    .setTitle(`${message.author.username} обкончал ${user.username}`)
    .setColor(`#rrggbb`)
    .setImage(`${response}`);
  }
  message.channel.send(embedMsg);
}

exports.help = {
    name: "cum",
    aliases: [],
    usage: `cum`
}
