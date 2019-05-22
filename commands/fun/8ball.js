const { RichEmbed } = require("discord.js");
const { prefix, colors } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "8ball",
        aliases: ["8b", "9ball"],
        description: "Sends wisdom from a question",
        category: "fun"
    },
    run: async (client, message, args) => {
        let replies = [
            "Yeah",
            "No",
            "You're gay",
            "I don't know about that one chief",
            "Chief called, said this ain't it"
        ]
        let result = Math.floor((Math.random() * replies.length));
        let question = args.join(" ");
        if(!question) return message.reply(`Incorrect arguments: \`${prefix}8ball <question>\``);
    
        let ballembed = new RichEmbed()
        .setColor(colors.lightPurple)
        .addField("Question", question)
        .addField("Answer", replies[result])
        .setFooter(`Asked by ${message.author.username}`, message.author.displayAvatarURL)
    
        await(1000);
        message.channel.send(ballembed);
        return;
    }
}