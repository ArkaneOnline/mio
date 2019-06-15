const { RichEmbed } = require("discord.js");
const { colors, opUsers } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "faq",
        aliases: [],
        description: "FAQ for The Ramen Shop",
        category: "ramenshop"
    },
    run: async (client, message, args) => {
        if(message.guild.id != 511289361178820618) return;
        await message.delete();

        let faqembed = new RichEmbed()
        .setColor(colors.yellow)
        .setTitle("Frequently Asked Questions")
        .setDescription("Some of the questions you may have")
        .setThumbnail(message.guild.iconURL)
        .addBlankField(true)
        .addField("Can I apply for moderator?", "Yes you can! `/apply <application message>` to apply!", true)
        .addField("How do I view the rest of the channels in the server?", "You have not registered with the Destiny 2 bot. Head over to #register and type `d!register`", true)
        .addField("Where do I report somebody?", "DM one of the admins or staff members about the issue", true)
        .addField("How do I level up and get roles?", "Just be active and you will eventually get roles based on your level with the bot", true)
        .addField("How do I join the clan?", "Clan 1: https://www.bungie.net/en/ClanV2?groupid=2089890 \nClan 2: https://www.bungie.net/en/ClanV2?groupid=3778179", true)
        .addField("Do I have to be in the Discord to be in the clan?", "Yes, you must be a member of this Discord in order to join the clan, however, you can be in this Discord without being in the clan", true)

        message.channel.send(faqembed);
        return;
    }
}