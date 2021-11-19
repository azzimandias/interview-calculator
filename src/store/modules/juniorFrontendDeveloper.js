export default {
    state: {
        questions: [
            {
                id: 0,
                title: 'Есть ли у тебя опыт?',
            },
            {
                id: 1,
                title: 'Начнём с простого, div от span отличишь?',
            },
            {
                id: 2,
                title: 'Окей, а с JS у тебя как?',
            },
            {
              id: 3,
              title: 'Насколько ты любишь PHP?',
            },
            {
                id: 4,
                title: 'Сколько дней в неделю планируешь ходить в офис?',
            },
            {
                id: 5,
                title: 'Кстати, а оценку задач ты как даёшь?',
            },
        ],
        answers: [
            [
                {
                    id: 0,
                    title: 'Больше 5 лет работаю по этой специальности',
                    count: 20,
                },
                {
                    id: 1,
                    title: 'Ну немножко поработать успел',
                    count: 10,
                },
                {
                    id: 2,
                    title: 'Чтобы получить опыт нужна работа, а я тут ваши тесты прохожу',
                    count: 0,
                },
            ],
            [
                {
                    id: 3,
                    title: 'Естественно, первый для контейнеров, второй для текста',
                    count: 15,
                },
                {
                    id: 4,
                    title: 'Код пишут компьютеры, пусть они и отличают',
                    count: 10,
                },
                {
                    id: 5,
                    title: 'Думаю, что да',
                    count: -5,
                },
            ],
            [
                {
                    id: 6,
                    title: 'Я как-то больше по JQuery',
                    count: -30,
                },
                {
                    id: 7,
                    title: 'Норм, прошёл курс',
                    count: 5,
                },
                {
                    id: 8,
                    title: 'На чистом JS уже не первый год пишу',
                    count: 20,
                },
            ],
            [],
            [
                {
                    id: 9,
                    title: 'Я хочу работать удалённо',
                    count: -20,
                },
                {
                    id: 10,
                    title: '3-4 дня в неделю будет норм',
                    count: 5,
                },
                {
                    id: 11,
                    title: 'Я перееду в ваш офис, крепитесь',
                    count: 20,
                },
            ],
            [
                {
                    id: 12,
                    title: 'По часам',
                    count: 1.8,
                },
                {
                    id: 13,
                    title: 'По дням',
                    count: 1.3,
                },
                {
                    id: 14,
                    title: 'По наитию',
                    count: 0.6,
                },
            ]
        ],
    },
    getters: {
        juniorQuestions(state) {
            return state.questions;
        },
        juniorAnswers(state) {
            return state.answers;
        },
    }
}

