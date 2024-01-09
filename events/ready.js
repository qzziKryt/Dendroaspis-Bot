module.exports = (client) => {
    console.log(`${client.user.tag} is online!`);
    client.user.setActivity(`Standoff 2`, {type: "PLAYING"});
};
