const { RichEmbed } = require("discord.js")
const superagent = require("superagent");
const { colors } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "cat",
        aliases: ["meow"],
        description: "Sends a random picture of a cat",
        category: "fun"
    },
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`https://aws.random.cat/meow`);
    
        let catembed = new RichEmbed()
        .setColor(colors.lightPurple)
        .setDescription(`${message.author} requested a cat!`)
        .setImage(body.file)
        .setFooter("Powered by random.cat", client.user.displayAvatarURL)
    
        await(1000);
        message.channel.send(catembed);
        return;
    }
}