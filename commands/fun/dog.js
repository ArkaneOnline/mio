const { RichEmbed } = require("discord.js")
const superagent = require("superagent");
const { colors } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "dog",
        aliases: ["woof", "doggo"],
        description: "Sends a random picture of a dog",
        category: "fun"
    },
    run: async (client, message, args) => {
        let {body} = await superagent
        .get(`https://random.dog/woof.json`);
    
        let dogembed = new RichEmbed()
        .setColor(colors.lightPurple)
        .setDescription(`${message.author} requested a dog!`)
        .setImage(body.url)
        .setFooter("Powered by random.dog", client.user.displayAvatarURL)
    
        await(1000);
        message.channel.send(dogembed);
        return;
    }
}