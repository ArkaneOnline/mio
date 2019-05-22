module.exports = {
    config: {
        name: "mute",
        aliases: ["quiet", "m"],
        description: "Prevents the user from speaking in VC or Text Channels in the current server",
        category: "moderation"
    },
    run: async (client, message, args) => {
        await message.delete();
        let muted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!muted) return message.reply(`Incorrect usage: \`${prefix}mute @user\``);
        if(muted.id === message.author.id) return message.reply("Incorrect argument: user is not mutable");
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Insufficient permissions: `MANAGE_MESSAGES`");
    
        try{
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muted, {
                    VIEW_CHANNEL: null,
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false,
                    CONNECT: true,
                    SPEAK: false
                });
            });
        } catch(e) {
            console.log(e.stack);
        }
    
        message.reply("User has been muted!");
        return;
    }
}