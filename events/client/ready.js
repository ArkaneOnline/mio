const Discord = require("discord.js");
const { prefix } = require("../../appconfig.json");

module.exports = async (client, message) => {
    console.log(`${client.user.username} is online! \nServing ${client.guilds.size} servers, and ${client.users.size} users!`);
    client.user.setPresence({ game: { name: `${prefix}help | DM to send me feedback!`}, status: "online" });
}