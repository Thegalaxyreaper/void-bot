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
// this is the rules accept main command! do not DELETE this duck! you Will break the server!...carry on \\
async function assignRole(msg, Rolename) {
const member = msg.member;
const role = msg.guild.roles.cache.find(r => r.name === roleName);

if (!role) {
    return msg.reply (`The role "${rolename}" does not exist.`);
}

try {
    await member.role.add(role);
    msg.reply(`Welcome to the void hotel! Enjoy your stay. you now have access to all the channels.`);
} catch (error) {
    console.error(error);
    msg.reply ("I couldn't assign the role. please contact Ducky or hiro.")
}
}
client.on ("messageCreate" , async (msg) => {
    if (msg.author.bot) return;

    if (msg.content.toLowerCase() === '!accept') {
        assignRole(msg, 'Void Travelers');
    }
});
// this is the main command code //
client.on("messageCreate" , msg => {
    if (msg.content === "Welcome everyone please") {
        msg.reply("good evening everyone in the void! stream starts at 12 today!");
    } else if  (msg.content === "Dantes wife") {
        msg.reply("Yukari has now been tossed into the void! RIP");
    } else if (msg.content === "Another bad yuka take") {
      msg.reply("Damn another bad take Yuka!");
    }
});
client.on("messageCreate" , msg => {
    if (msg.content === "!Hiroshi") {
        msg.reply("do you wish to speak with my master?!");
    } else if (msg.content === "!Hiro") {
        msg.reply("shh Master is sleeping! Dont wake the beast!");
    }
});
// we are making roulette command! //
client.on('messageCreate', msg=> {
    if(msg.content === '!roulette') {
        const spin = Math.floor(Math.random() * 37);
        const color = getRouletteColor(spin);
        msg.reply(`The roulette landed on drum roll please! ${spin} - ${color}`);
    }
});
function getRouletteColor(number) {
    if (number === 0) return 'Blue' ;
    const redNumbers = [
        1, 3, 5, 7, 9, 12, 14, 16, 18,
        19, 21, 23, 25, 27, 30, 32, 34, 36
    ];
    return redNumbers.includes(number) ? 'red' : 'black' ;
}
client.login(process.env.TOKEN);
