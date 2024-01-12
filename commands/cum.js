const { MessageEmbed } = require("discord.js");

exports.execute = (client, message, args) => {
  const wallpapers = [
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418291930419240/this-is-my-kingdom-cum-cumming.gif?ex=65b3eb0a&is=65a1760a&hm=227a7478299f97b6f3ca513da539714b72a6e4d0786c973a79f4b9bb3e38c08b&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418848631984138/nut-cum.gif?ex=65b3eb8f&is=65a1768f&hm=15cf03db49405bc9b7fd7569f9eea7c188401526f6bbb410fc69e63f9887e80a&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418866847858769/ejaculation-explosion.gif?ex=65b3eb93&is=65a17693&hm=dca595dc205cd0f1b3dc5d09bbecf6e5ec3fb676634b69ec172f8783101bc535&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418891724279808/gaviscon-kingdom-come.gif?ex=65b3eb99&is=65a17699&hm=9dfe88a16caa50b279e0f93e19381243522463c0d11f60988742299ddee8eaff&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195418902402961418/cum.gif?ex=65b3eb9c&is=65a1769c&hm=7b2444ba1af4cde7051162a2644c8d9f9bcc2d9371a6bbc0c12b1b1ec7eccbc3&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441701133766757/rjcity-bicep.gif?ex=65b400d7&is=65a18bd7&hm=9884a001f91647e62908c8ad3fd0014b327618d8e603c11ed47ba39ef6f5942c&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441719093760071/eww.gif?ex=65b400dc&is=65a18bdc&hm=e6966600abe814ec1ed086b45fb35586b921af52d64241db372ba377cbc8e81f&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441726588981359/54496.gif?ex=65b400dd&is=65a18bdd&hm=f84e2b5bc56d02c3fea7766147d442c4f4d1d025c90de9651ad8b2324c66e98c&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441744897118358/champagne-bubbly.gif?ex=65b400e2&is=65a18be2&hm=f4bc8f95b15f4c963a7764a248738534a552999cf1c3ea9832cbd984c75c0cfe&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441750211301406/nut-orgasm.gif?ex=65b400e3&is=65a18be3&hm=8984e058d685eb781119225c9d7549eab2f6d39c6b31c702b1622bbeefe2faaf&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441765864460288/glue-cleanup-cum.gif?ex=65b400e7&is=65a18be7&hm=cafdcbb6557d633a9f6a73e59db21c32add3a3036ab37d7d3d2fd7e95057ed78&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441768636895293/cum-anime.gif?ex=65b400e7&is=65a18be7&hm=a47d80164190062b42497cd08fbfe79e945e377059e246f63cc0f283cfe5ad2b&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441772319473766/woozi-wet.gif?ex=65b400e8&is=65a18be8&hm=cd5bd35fca2714149bc69bc02424009a3fbcf8f1d27c748166138a7786cb2d1f&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441775427461200/misleading-lotion.gif?ex=65b400e9&is=65a18be9&hm=339f84aa9e58d6dee55e75e7f43ca783af4043364118c57f945d5a908d7690ce&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441778380247131/5484.gif?ex=65b400ea&is=65a18bea&hm=7f8ba86cdcc6da7b353883c988dcb3a226b41db434b19cdf1334abcbc1868673&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441781832167484/cum.gif?ex=65b400eb&is=65a18beb&hm=ad9d28284241f0a5d4e473b57825d319ca6521b2ffd95b828d70873bb7fbcb66&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441785732874323/anime-hug-isekai.gif?ex=65b400eb&is=65a18beb&hm=d9fbb447623b4714929c2fe41cbf5e348bda90679a41de07421ef81d5b20b2ac&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441789105090730/cum-nicht-nachmachen.gif?ex=65b400ec&is=65a18bec&hm=3fcf33b30e5193f4e0c8241a46d835eb0f5f75fdb96a90643c4c5d13950aa4bf&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441795576901822/telepurte-horny-angel.gif?ex=65b400ee&is=65a18bee&hm=32a65df14e04c1cfb6fac9bce06e0368383fb19a638e58f3bd530dd276bee1db&",
    "https://cdn.discordapp.com/attachments/1117898899462561792/1195441802744971485/cum-burger.gif?ex=65b400f0&is=65a18bf0&hm=7d2cca6e516f35221eb73c518a457353c9c067ddf1c2a54a9107a9f6c271091c&"
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
    .setTitle(`${message.author.toString()} обкончал ${user.toString()}`)
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
