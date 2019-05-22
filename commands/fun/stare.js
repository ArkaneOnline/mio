const { RichEmbed } = require("discord.js");
const { colors } = require("../../appconfig.json");

module.exports = {
    config: {
        name: "stare",
        aliases: ["look"],
        description: "Stare at a chat",
        category: "fun"
    },
    run: async (client, message, args) => {      
        let gifs = [
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/stare/stare1.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/stare/stare2.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/stare/stare3.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/stare/stare4.gif?raw=true",
            "https://github.com/ArkaneOnline/mio-assets/blob/master/img/stare/stare5.gif?raw=true"
        ];
        let gif = gifs[Math.floor(Math.random()*gifs.length)];
        
        let stare = new RichEmbed()
        .setColor(colors.lightPurple)
        .setDescription(`${message.author} stares`)
        .setImage(gif)
        .setFooter(`Powered by ${client.user.username}`, client.user.displayAvatarURL)

        await(1000);
        message.channel.send(stare);
    }
}