import TelegramBot from 'node-telegram-bot-api';
require("dotenv").config();

// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TOKEN;

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token!, { polling: true });

// Matches "/echo [whatever]"
bot.onText(/\/help (.+)/, (msg: TelegramBot.Message, match: RegExpExecArray | null) => {
    if (match === null) {
      return;  // or handle this situation in another appropriate way
    }
    console.log(match);
    // Your existing logic
    const chatId = msg.chat.id;
    const resp = match[1]; // the captured "whatever"
  
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, JSON.stringify(match));
  });


// 자기소개
  bot.onText(/\/intro/, (msg: TelegramBot.Message) => {
    const intro = "my name is demo telegram bot you can ask me to do anything"
    const chatId = msg.chat.id;
    // send back the matched "whatever" to the chat
    bot.sendMessage(chatId, intro);
  });

// Listen for any kind of message. There are different kinds of
// messages.
bot.on('message', (msg: TelegramBot.Message) => {
  const chatId = msg.chat.id;
  
  // send a message to the chat acknowledging receipt of their message
  bot.sendMessage(chatId, `Received your message ${JSON.stringify(msg)}`);
});
