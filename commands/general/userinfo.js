const { RichEmbed } = require("discord.js");
const { colors } = require("../../appconfig.json");
const moment = require("moment");

module.exports = {
    config: {
        name: "userinfo",
        aliases: ["memberinfo", "ui", "accountinfo"],
        description: "A command to display the info of your account, or a specified account",
        category: "general"
    },
    run: async (client, message, args) => {
        let uuser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        if(!uuser){
            let userinfo = new RichEmbed()
            .setColor(colors.darkPurple)
            .setThumbnail(message.author.displayAvatarURL)
            .setDescription("Trackable user information")
            .addField("Mention", message.author)
            .addField("Name", message.author.username)
            .addField("Discriminator", message.author.discriminator)
            .addField("Name with Discriminator", message.author.tag)
            .addField("Account Created", `${moment(message.author.createdAt).format("MM/DD/YYYY")}`)
            .addField("Joined Server", `${moment(message.member.joinedAt).format("MM/DD/YYYY")}`)
            .setFooter(`Data requested by ${message.author.username}`, message.author.displayAvatarURL)
    
            message.channel.send(userinfo);
            return;
        } else {
            let userinfoping = new RichEmbed()
            .setColor(colors.darkPurple)
            .setThumbnail(uuser.user.displayAvatarURL)
            .setDescription("Trackable user information")
            .addField("Mention", uuser)
            .addField("Name", uuser.user.username)
            .addField("Discriminator", uuser.user.discriminator)
            .addField("Name with Discriminator", uuser.user.tag)
            .addField("Account Created", `${moment(uuser.user.createdAt).format("MM/DD/YYYY")}`)
            .addField("Joined Server", `${moment(uuser.joinedAt).format("MM/DD/YYYY")}`)
            .setFooter(`Data requested by ${message.author.username}`, message.author.displayAvatarURL)

            message.channel.send(userinfoping);
            return;
        }
    }
}