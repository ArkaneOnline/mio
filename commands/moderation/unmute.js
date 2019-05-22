module.exports = {
    config: {
        name: "unmute",
        aliases: ["um"],
        description: "Unmutes a currently muted user",
        category: "moderation"
    },
    run: async (client, message, args) => {
        await message.delete();
        let unmuted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!unmuted) return message.reply(`Incorrect usage: \`${prefix}unmute @user\``);
        if(unmuted.id === message.author.id) return message.reply("Incorrect argument: user is not unmutable");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Insufficient permissions: `MANAGE_MESSAGES`");
    
        try{
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(unmuted, {
                    VIEW_CHANNEL: null,
                    SEND_MESSAGES: null,
                    ADD_REACTIONS: null,
                    CONNECT: null,
                    SPEAK: null
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    
        message.reply("User has been unmuted!");
        return;
    }
}