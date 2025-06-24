const { Telegraf } = require('telegraf');
require('dotenv').config();
const botTexts = require('./src/BotTexts');
const bot = new Telegraf(process.env.BOT_TOKEN);
const actionHandlers = require('./src/handlers/Actions');
bot.start(async(ctx) => await ctx.sendPhoto(
    { source: "./res/лого в векторе пнг.png"}, 
    { caption: botTexts.welcome,
        reply_markup: {
            inline_keyboard: [
                [ { text: "О компании", callback_data: "btn_company_info" }, { text: "Путь в 1С", callback_data: "btn_roadmap" } ],
            ]
        }
    }
));
bot.on('message', async (ctx) => {
    console.log('Получено сообщение:', ctx.message);
});

bot.on('callback_query', async (ctx, next) => {
    console.log('Нажата кнопка:', ctx.callbackQuery.data);
    await next();
});
actionHandlers(bot);

bot.launch();
console.log('Бот запущен');


// Enable graceful stop
process.once('SIGINT', () => bot.stop('SIGINT'));
process.once('SIGTERM', () => bot.stop('SIGTERM'));