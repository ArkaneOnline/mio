const { RichEmbed } = require("discord.js");
const { colors } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "pat",
        aliases: ["headpat"],
        description: "Give a user a virtual headpat",
        category: "fun"
    },
    run: async (client, message, args) => {
        let patted = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let gifs = [
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/pat/pat1.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/pat/pat2.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/pat/pat3.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/pat/pat4.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/pat/pat5.gif?raw=true"
        ];
        let gif = gifs[Math.floor(Math.random()*gifs.length)];
    
        if(!patted){
            let patembed = new RichEmbed()
            .setColor(colors.lightPurple)
            .setDescription(`${message.author} gave themselves some head pats`)
            .setImage(gif)
            .setFooter(`Powered by ${client.user.username}`, client.user.displayAvatarURL)
            message.channel.send(patembed);
        } else {
            let patembed = new RichEmbed()
            .setColor(colors.lightPurple)
            .setDescription(`${message.author} pats ${patted}`)
            .setImage(gif)
            .setFooter(`Powered by ${client.user.username}`, client.user.displayAvatarURL)
    
            await(1000);
            message.channel.send(patembed);
        }
    }
}