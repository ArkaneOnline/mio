const { RichEmbed } = require("discord.js");
const { colors } = require("../../appconfig.json");
const moment = require("moment");

module.exports = {
    config: {
        name: "serverinfo",
        aliases: ["servinfo", "si", "guildinfo"],
        description: "A command to view information about the current server",
        category: "general"
    },
    run: async (client, message, args) => {
        let serverinfo = new RichEmbed()
        .setColor(colors.darkPurple)
        .setThumbnail(message.guild.iconURL)
        .addField("Guild Name", message.guild.name)
        .addField("Guild Owner", message.guild.owner)
        .addField("Member Count", message.guild.memberCount)
        .addField("Guild Created", `${moment(message.guild.createdAt).format("MM/DD/YYYY")}`)
        .addField("Guild Region", message.guild.region)
        .setFooter(`Data requested by ${message.author.username}`, message.author.displayAvatarURL)

        message.channel.send(serverinfo);
        return;
    }
}