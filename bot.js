const Discord = require('discord.js');
const bot = new Discord.Client();
const { token, prefix } = require('./config');

bot.on('message', message => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === 'ping') {
    message.channel.send('Pong.');
  } else if (command === 'beep') {
    message.channel.send('Boop.');
  }
});
bot.on('ready', () => console.log('Im ready'));
bot.login(token);
