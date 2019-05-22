const { RichEmbed } = require("discord.js");
const { colors } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "kill",
        aliases: [""],
        description: "Virtually kill a user",
        category: "fun"
    },
    run: async (client, message, args) => {
        let killed = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));

        let gifs = [
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/kill/kill1.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/kill/kill2.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/kill/kill3.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/kill/kill4.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/kill/kill5.gif?raw=true"
        ];
        let gif = gifs[Math.floor(Math.random()*gifs.length)];
        
        if(!killed){
            let killembed = new RichEmbed()
            .setColor(colors.lightPurple)
            .setDescription(`${message.author} commited suicide`)
            .setImage(gif)
            .setFooter("Powered by tenor.com", client.user.displayAvatarURL)
            message.channel.send(killembed);
        } else {
            let killembed = new RichEmbed()
            .setColor(colors.lightPurple)
            .setDescription(`${message.author} killed ${killed}`)
            .setImage(gif)
            .setFooter("Powered by tenor.com", client.user.displayAvatarURL)
    
            await(1000);
            message.channel.send(killembed);
        }
    }
}