module.exports = {
    config: {
        name: "support",
        aliases: ["helpme", "sup"],
        description: "A command to send a link to the support server",
        category: "general"
    },
    run: async (client, message, args) => {
        message.reply("DM sent!");
        message.author.send("Here is a link to join the support server! \nhttps://discord.gg/A6u7nC9");
        return;
    }
}