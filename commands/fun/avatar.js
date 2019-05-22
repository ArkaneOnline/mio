module.exports = {
    config: {
        name: "avatar",
        aliases: ["icon", "pfp", "profilepic"],
        description: "View users avatars",
        category: "fun"
    },
    run: async (client, message, args) => {
        let auser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
        if(auser){
            let userurl = auser.user.avatarURL;
            message.channel.send(`Here is a link to ${auser}'s avatar: ${userurl}`);
        } else {
            let yoururl = message.author.avatarURL;
            message.channel.send(`Here is a link to your avatar: ${yoururl}`);
        }
    
        return;
    }
}