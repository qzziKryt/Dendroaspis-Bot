module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
    client.user.setActivity(`за вами котиками 😻`, {type: "WATCHING"});
};
