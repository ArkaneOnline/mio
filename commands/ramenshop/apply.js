const { RichEmbed } = require("discord.js");
const { colors, opServers } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "apply",
        aliases: ["modapplication", "modapp"],
        description: "Lets users in the Ramen Shop apply for moderator",
        category: "ramenshop"
    },
    run: async (client, message, args) => {
        if(message.guild.id != 511289361178820618) return;
        await message.delete();

        let application = args.join(" ");

        let appembed = new RichEmbed()
        .setColor(colors.green)
        .setTitle("Moderator Application")
        .addField("Applicant", message.author)
        .addField("Application", application)
        .setTimestamp()

        let modappchannel = message.guild.channels.find(`name`, "mod-apps");
        modappchannel.send(appembed);
        return;
    }
}