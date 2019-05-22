const { RichEmbed } = require("discord.js");
const { colors, opUsers } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "changelog",
        aliases: ["changes", "updates", "cl"],
        description: "A command to display the most recent changelog",
        category: "general"
    },
    run: async (client, message, args) => {
        await message.delete();

        let changeembed = new RichEmbed()
        .setColor(colors.darkPurple)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`${client.user} Changelog, 5/21/19`)
        .addField("Rewrite Completed", "The bot now runs on a different engine of handlers which are much faster than before")
        .addField("Name and Icon change", "You could probably already tell, but I changed the name and the icon")
        .setFooter(`Created by: ${client.users.get(opUsers.arkane).username}`, client.users.get(opUsers.arkane).displayAvatarURL)

        message.channel.send(changeembed);
        return;
    }
}