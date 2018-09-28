const Discord = require("discord.js"); 
const client = new Discord.Client(); 
var wartosc; 
client.on("ready", () => {
  console.log("rozwalmy discorda hehe");
});
 
client.on("message", (message) => {
  if (message.content.startsWith("everyd")) {

for (step = 0; step < 100; step++) {
 
  message.channel.send("@everyone");
}
}    
 
});
client.login("token here XD");          
