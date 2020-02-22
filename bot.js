const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("680727094086598672")
setInterval(function() {
channel.send(`اناحكيم حلو ومساعد الله يخليني`);
}, 30)
})

client.login(process.env.BOT_TOKEN);