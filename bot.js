// Run dotenv
require('dotenv').config();

const Discord = require('discord.js');
const client = new Discord.Client();
var prefix = []
prefix[0] = '!run '

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if(msg.content.startsWith(prefix[0])){
    command = msg.content.substr(prefix[0].length)
    if (command === 'ping') {
      msg.reply('pong');
    }
    if(command.startsWith('setprefix ')){
      prefix[0] = command.substr('setprefix '.length)
      msg.reply('new prefix is: "' + prefix[0] + '"')
    }
  }
});

client.login(process.env.DISCORD_TOKEN);
