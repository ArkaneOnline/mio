module.exports = {
    config: {
        name: "invite",
        aliases: ["addme", "inv"],
        description: "A command that DMs the bot invite link to the user",
        category: "general"
    },
    run: async (client, message, args) => {
        message.author.send("Click the link to invite me to your server! \nhttps://discordapp.com/api/oauth2/authorize?client_id=556257000489615363&permissions=8&scope=bot")
        message.reply("DM Sent!");
        return;
    }
}