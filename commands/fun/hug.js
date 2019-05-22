const { RichEmbed } = require("discord.js");
const { colors } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "hug",
        aliases: [""],
        description: "Give a virtual hug to a user",
        category: "fun"
    },
    run: async (client, message, args) => {
        let hugged = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let gifs = [
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/hug/hug1.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/hug/hug2.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/hug/hug3.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/hug/hug4.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/hug/hug5.gif?raw=true"
        ];
        let gif = gifs[Math.floor(Math.random()*gifs.length)];
        
        if(!hugged){
            let hugembed = new RichEmbed()
            .setColor(colors.lightPurple)
            .setDescription(`${message.author} hugs themsleves`)
            .setImage(gif)
            .setFooter(`Powered by ${client.user.username}`, client.user.displayAvatarURL)
            message.channel.send(hugembed);
        } else {
            let hugembed = new RichEmbed()
            .setColor(colors.lightPurple)
            .setDescription(`${message.author} hugs ${hugged}`)
            .setImage(gif)
            .setFooter(`Powered by ${client.user.username}`, client.user.displayAvatarURL)
    
            await(1000);
            message.channel.send(hugembed);
        }
    }
}