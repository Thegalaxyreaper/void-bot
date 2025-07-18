const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Bot is running!');
});
app.listen(3000, () => {
  console.log('Web server is running');
});
require ('dotenv').config();
const discord = require ("discord.js")
const client = new discord.Client({
    intents: ["Guilds" , "GuildMessages", "MessageContent" ]
});

client.on("ready" , () => {
    console.log(`Logged in as ${client.user.tag}!`)
});
client.on("messageCreate" , msg => {
    if (msg.content === "Welcome everyone please") {
        msg.reply("good evening everyone in the void! stream starts at 12 today!");
    }
});
client.on("messageCreate" , msg => {
    if (msg.content === "Dante") {
        msg.reply("Yukari has now been tossed into the void! RIP");
    }
});
client.login(process.env.TOKEN);
