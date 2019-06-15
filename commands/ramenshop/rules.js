const { RichEmbed } = require("discord.js");
const { colors, opUsers, opServers } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "rules",
        aliases: [],
        description: "Embed for the rules of the server",
        category: "ramenshop"
    },
    run: async (client, message, args) => {
        if(message.guild.id !== opServers.ramenhop) return;
        await message.delete();

        let rulesembed = new RichEmbed()
        .setColor(colors.yellow)
        .setTitle("Rules")
        .setDescription("The basics for you being a member of the Ramen Shop Clan")
        .setThumbnail(message.guild.iconURL)
        .addBlankField(true)
        .addField("Rules", "Below is what you should follow when you use this server")
        .addField("Don't be an asshole", "Pretty generic, but being mean to other users for no reason is very uncalled for and could result in removal from the server", true)
        .addField("No Advertising", "Nobody wants to join your random server that you made for something entirely different than Destiny 2 content", true)
        .addField("Listen to Staff", "They have the final say with any drama that starts in this server", true)
        .addField("Don't start drama", "All your arguments over stupid things should not be in this server", true)
        .addField("Learn how to take a joke", "If you think a joke is offensive, it's not meant to be, hence the name 'joke', so don't report any of that nonsense to the staff team", true)
        .addField("No Alt Accounts", "We like to have accurate numbers and alt accounts are not accurate. If you spot an alt account, let a staff member know so we can investigate", true)
        .addBlankField(true)
        .addField("Punishments", "This is what happens if you break any of these rules")
        .addField("Warns, kicks, and bans", "Depending on severity of the situation, you may be warned, kicked, or banned. If you are a repeat offender, we may up the level of severity because of your history", true)
        .addField("Do not question a staff member", "If you believe a staff member is incorrect with their descision, report it to one of the higher up staff members and they will look in to it", true)
        .addBlankField(true)
        .addField("As always, Welcome to The Ramen Shop!", "We at the staff team hope you enjoy your stay here!")
        .setImage(message.guild.iconURL)
        .setTimestamp()
        .setFooter(`This bot and these rules were created by ${client.users.get(opUsers.arkane).username}`, client.users.get(opUsers.arkane).displayAvatarURL)

        message.channel.send(rulesembed);
    }
}