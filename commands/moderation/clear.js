module.exports = {
    config: {
        name: "clear",
        aliases: ["prune"],
        description: "Deletes messages in bulk in the current channel",
        category: "moderation"
    },
    run: async (client, message, args) => {
        await message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Insufficient permissions: Manage Messages`);
        if(!args[0]) return message.reply(`Incorrect usage: \`${prefix}clear 1-100\``);
        if(args[0] >= 101) return message.reply("API Error: BulkDelete cannot exceed 100 messages");
    
        let number = args[0];
        message.channel.bulkDelete(args[0]);
        message.reply(`Cleared ${args[0]} messages!`).then(msg => msg.delete(5000));
    }
}