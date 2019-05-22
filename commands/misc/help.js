const { RichEmbed } = require("discord.js");
const { prefix, colors, opUsers } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "help",
        aliases: ["h", "commands"],
        description: "A command that displays all commands",
        category: "misc"
    },
    run: async (client, message, args) => {
        let helpembed = new RichEmbed()
        .setColor(colors.lightPurple)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`Commands for ${client.user}`)
        .addField("Help Subcommands", `\`${prefix}help general\`, \`${prefix}help fun\`, \`${prefix}help misc\`, \`${prefix}help mod\``)
        .setFooter("Help Command | List 0/4 | Subcommands | Made by: Arkane", client.users.get(opUsers.arkane).displayAvatarURL)

        let generalembed = new RichEmbed()
        .setColor(colors.lightPurple)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`General Commands for ${client.user}`)
        .addField(`${prefix}changelog`, `Sends the most recent changelog to the current channel \n\`Aliases: ${prefix}changes, ${prefix}updates, ${prefix}cl\``)
        .addField(`${prefix}invite`, `Sends a link to invite me to another server \n\`Aliases: ${prefix}addme, ${prefix}inv\``)
        .addField(`${prefix}ping`, `Test the latency of the bot and Discord API \n\`Aliases: ${prefix}pong, ${prefix}latency\``)
        .addField(`${prefix}serverinfo`, `Provides information on the current server \n\`Aliases: ${prefix}servinfo, ${prefix}si, ${prefix}guildinfo\``)
        .addField(`${prefix}support`, `Sends a link to the support server via DMs \n\`Aliases: ${prefix}helpme, ${prefix}sup\``)
        .addField(`${prefix}uptime`, `Tells you how long the bot has been online in the current session \n\`Aliases: ${prefix}timeonline, ${prefix}ut\``)
        .addField(`${prefix}userinfo <@user>`, `Sends information on either your, or a specified users account \n\`Aliases: ${prefix}memberinfo, ${prefix}ui, ${prefix}accountinfo\``)
        .setFooter("Help Command | List 1/4 | General Commands | Made by: Arkane", client.users.get(opUsers.arkane).displayAvatarURL)

        let funembed = new RichEmbed()
        .setColor(colors.lightPurple)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`Fun Commands for ${client.user}`)
        .addField(`${prefix}8ball <question>`, `Provides some wisdom to a question you may have \n\`Aliases: ${prefix}8b, ${prefix}9ball\``)
        .addField(`${prefix}avatar <@user>`, `Sends a link to you, or a specified users avatar \n\`Aliases: ${prefix}icon, ${prefix}pfp, ${prefix}profilepic\``)
        .addField(`${prefix}cat`, `Sends a random picture of a cat \n\`Aliases: ${prefix}meow\``)
        .addField(`${prefix}dog`, `Sends a random picture of a dog \n\`Aliases: ${prefix}woof, ${prefix}doggo\``)
        .addField(`${prefix}hug <@user>`, `Virtually give a user a hug \n\`Aliases: null\``)
        .addField(`${prefix}kill <@user>`, `Virtually kill a user \n\`Aliases: null\``)
        .addField(`${prefix}pat <@user>`, `Virtually give a user a headpat \n\`Aliases: ${prefix}headpat\``)
        .addField(`${prefix}stare`, `Virtually stare at a chat \n\`Aliases: ${prefix}look\``)
        .setFooter("Help Command | List 2/4 | Fun Commands | Made by: Arkane", client.users.get(opUsers.arkane).displayAvatarURL)

        let miscembed = new RichEmbed()
        .setColor(colors.lightPurple)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`Misc Commands for ${client.user}`)
        .addField(`${prefix}help`, `View all of the commands for me \n\`Aliases: ${prefix}h, ${prefix}commands\``)
        .setFooter("Help Command | List 3/4 | Misc Commands | Made by: Arkane", client.users.get(opUsers.arkane).displayAvatarURL)

        let modembed = new RichEmbed()
        .setColor(colors.lightPurple)
        .setThumbnail(client.user.displayAvatarURL)
        .setDescription(`Moderation Commands for ${client.user}`)
        .addField(`${prefix}ban <@user> <reason>`, `Bans a user from the current server \n\`Aliases: ${prefix}banish, ${prefix}permaban\``)
        .addField(`${prefix}clear <1-100>`, `Clears a specified number of messages in the current channel \n\`Aliases: ${prefix}prune\``)
        .addField(`${prefix}kick <@user> <reason>`, `Kicks a user from the current server \n\`Aliases: ${prefix}remove, ${prefix}purge\``)
        .addField(`${prefix}mute <@user>`, `Prevents a user from speaking in VC or Text Channels until unmuted \n\`Aliases: ${prefix}quiet, ${prefix}m\``)
        .addField(`${prefix}say <message>`, `Will say the message that you specified \n\`Aliases: ${prefix}speak\``)
        .addField(`${prefix}unmute <@user>`, `Unmutes a currently muted user \n\`Aliases: ${prefix}um\``)
        .setFooter("Help Command | List 4/4 | Moderator Commands | Made by: Arkane", client.users.get(opUsers.arkane).displayAvatarURL)

        

        if(!args[0]){
            message.channel.send(helpembed)
            return;
        }

        if(args[0] === "general"){
            message.channel.send(generalembed);
            return;
        }

        if(args[0] === "fun"){
            message.channel.send(funembed);
            return;
        }

        if(args[0] === "misc"){
            message.channel.send(miscembed);
            return;
        }

        if(args[0] === "mod"){
            message.channel.send(modembed);
            return;
        }

        if(args[0]){
            return message.reply(`Invalid Subcommand Name: \`${prefix}help\``);
        }
        return;
    }
}