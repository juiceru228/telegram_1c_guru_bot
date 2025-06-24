const botTexts = require('../BotTexts');

module.exports = (bot) => {
    bot.action("btn_company_info", async ctx => await ctx.reply(
        botTexts.company_info,
        {
            reply_markup: {
                inline_keyboard: [
                    [ { text: "О сотрудниках", callback_data: "btn_employee_info" }, { text: "Корпоративная жизнь", callback_data: "btn_routine" } ],
                    [{ text: "Обучение", callback_data: "btn_education" }],
                    [{ text: "Ценности компании", callback_data: "btn_values" }]
                ]
            }
        }
    ));
    bot.action("btn_roadmap", async ctx => await ctx.reply( 
        botTexts.roadmap,
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Погружение в 1С", callback_data: "btn_dive" }],
                    [{ text: "Знакомство с мастером", callback_data: "btn_meeting" }],
                    [{ text: "Подарок", callback_data: "btn_present" }]
                ]
            }
        }
    ));
    //company info actopn handlers
    bot.action("btn_employee_info", async ctx => await ctx.reply(
        botTexts.employee_info
    ));
    bot.action("btn_routine", async ctx => await ctx.reply(
        botTexts.routine
    ));
    bot.action("btn_education", async ctx => await ctx.reply(
        botTexts.education
    ));
    bot.action("btn_values", async ctx => await ctx.reply(
        botTexts.values
    ));

    //roadmap action handlers
    bot.action("btn_dive", async ctx => await ctx.reply(
        botTexts.dive,
        {
            reply_markup: {
                inline_keyboard: [
                    [{ text: "Чек-лист программиста", url: 'https://disk.yandex.ru/d/DjTzLm3ueMJwxg'}],
                    [{ text: "Задание 1 для сисадминов", url: 'https://disk.yandex.ru/d/DjTzLm3ueMJwxg' }],
                    [{ text: "Чек-лист консультанта", url: 'https://disk.yandex.ru/d/DjTzLm3ueMJwxg' }],
                    [{ text: "Чек-лист и дневник практики будущего мага", callback_data: 'btn_checklist_diary' }]
                ]
            }
        }
    ));
    bot.action('btn_checklist_diary', async ctx => await ctx.reply(
        botTexts.diary,
        {
        reply_markup: {
        inline_keyboard: [
            [{ text: "Открыть чек-лист и дневник", url: 'https://disk.yandex.ru/d/DjTzLm3ueMJwxg' }]
        ]
        }
    }
    ));

    bot.action("btn_meeting", async ctx => await ctx.reply(
        botTexts.meeting
    ));
    bot.action("btn_present", async ctx => {
        await ctx.reply(
            botTexts.present,
            {
            reply_markup: {
                inline_keyboard: [
                [{ text: "Анкета", url: 'https://docs.google.com/forms/d/e/1FAIpQLSf4UkJy6ULHJ-7beOq5zvIoCvQw9Y1BTmMYhekjmeHaRMIgrw/viewform?usp=sharing'}],
                ]
            },
            parse_mode: 'MarkdownV2'
            }
        );
    });
}