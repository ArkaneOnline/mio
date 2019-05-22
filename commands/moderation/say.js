module.exports = {
    config: {
        name: "say",
        aliases: ["speak"],
        description: "The bot will say whatever you tell it to say",
        category: "moderation"
    },
    run: async (client, message, args) => {
        await message.delete();
        if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Insufficient Permissions: `MANAGE_MESSAGES`");
        if(!args[0]) return message.reply(`Incorrect Usage: \`${prefix}say message\``);
    
        let say = args.join(" ");
        message.channel.send(say);
    }
}