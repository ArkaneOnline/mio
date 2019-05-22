module.exports = {
    config: {
        name: "kick",
        aliases: ["remove", "purge"],
        description: "Kicks a user from the server on the spot",
        category: "moderation"
    },
    run: async (client, message, args) => {
        await message.delete();
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        let kicked = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!kicked) return message.reply(`Incorrect usage: \`${prefix}kick @user reason\``);
        if(kicked.id === message.author.id) return message.reply("Incorrect argument: `user is not kickable`");
        if(!message.member.hasPermission("KICK_MEMBERS")) return message.reply("Insufficient Permissions: `KICK_MEMBERS`");
        let kickreason = args.join(" ").slice(22);
        if(!kickreason) return message.reply(`Incorrect usage: \`${prefix}kick @user reason\``);
        if(kicked.hasPermission("ADMINISTRATOR")) return message.reply("Incorrect argument: `user is not kickable`");
        if(!kicked.kickable()) return message.reply("Incorrect argument: `user is not kickable`");
    
        kicked.send(`You have been kicked from **${message.channel.guild.name}** for the reason: **${kickreason}**`)
        await delay(500);
        message.reply("User kicked!");
        message.guild.member(kicked).kick(kickreason);
        return;
    }
}