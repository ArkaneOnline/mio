const config = require("../../appconfig.json");
let prefix = config.prefix;

module.exports = async (client, message) => {

    if(message.author.bot) return;
    
    if(message.channel.type === 'dm'){
        if(message.content.startsWith(prefix)) return message.channel.send(`You must be in a server to use my commands! \nWhen you use ${prefix}help in any server, I will DM you a help message!`);

        let fuser = message.author;
        let feedback = message.content;

        client.users.get(config.opUsers.arkane).send(`Feedback from: <@${fuser.id}> \n--------------------------------- \n${feedback}`);
        message.channel.send("Your feedback has been sent sucessfully!");
        return;
    }

    let args = message.content.slice(prefix.length).trim().split(/ +/g)
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(prefix)) return;
    let commandfile = client.commands.get(cmd) || client.commands.get(client.aliases.get(cmd))
    if(commandfile) commandfile.run(client, message, args)
}