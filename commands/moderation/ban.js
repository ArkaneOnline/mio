module.exports = {
    config: {
        name: "ban",
        aliases: ["banish", "permaban"],
        description: "Bans a user on the spot",
        category: "moderation"
    },
    run: async (client, message, args) => {
        await message.delete();
        const delay = (msec) => new Promise((resolve) => setTimeout(resolve, msec));
        let banned = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(!banned) return message.reply(`Incorrect usage: \`${prefix}ban @user reason\``);
        if(banned.id === message.author.id) return message.reply("Incorrect argument: `user is not bannable`");
        if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply("Insufficient Permissions: `BAN_MEMBERS`");
        let banreason = args.join(" ").slice(22);
        if(!banreason) return message.reply(`Incorrect usage: \`${prefix}ban @user reason\``);
        if(banned.hasPermission("ADMINISTRATOR")) return message.reply("Incorrect argument: `user is not bannable`");
        if(!banned.bannable()) return message.reply("Incorrect argument: `user is not bannable`");
    
        banned.send(`You have been banned from **${message.channel.guild.name}** for the reason: **${banreason}**`);
        await delay(500);
        message.reply("User banned!");
        message.guild.member(banned).ban(banreason);
        return;
    }
}