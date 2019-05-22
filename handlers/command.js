const { readdirSync } = require("fs");

module.exports = (client) => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith(".js"));

        for (let file of commands){
            const pull = require(`../commands/${dirs}/${file}`)
            client.commands.set(pull.config.name, pull)
            if(pull.config.aliases) pull.config.aliases.forEach(a => client.aliases.set(a, pull.config.name))
        }
    }
    ["fun", "misc", "moderation", "general"].forEach(x => load(x));
}