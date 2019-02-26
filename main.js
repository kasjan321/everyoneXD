const Discord = require("discord.js"); 
const client = new Discord.Client(); 
client.on("ready", () => {
  console.log("Bot Ready");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("EveryoneSpam")) {

for (step = 0; step < 100; step++) {
 
  message.channel.send("@everyone");
}
}    
 
});
client.login("TOKEN HERE");          
