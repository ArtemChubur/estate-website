const TelegramBot = require('node-telegram-bot-api');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const botToken = '6761213369:AAHxksh-NRtXTr7JGhPKSr-wmzTB4Dc4HSA'; // Замените на ваш токен
const bot = new TelegramBot(botToken, { polling: true });

const app = express();
app.use(bodyParser.json());
app.use(cors());

// Функция для отправки сообщения в ваш чат
function sendRequestToChat(username, phone) {
    const message = `Новая заявка:\nИмя: ${username}\nНомер телефона: ${phone}`;
    // bot.sendMessage('2145160304', message); // Замените на ваш ID чата
    bot.sendMessage('917035692', message); // Замените на ваш ID чата
    bot.sendMessage('1071716647', message); // Замените на ваш ID чата
}

app.post('/send-message', (req, res) => {
    const { username, phone } = req.body;

    // Отправляем данные заявки в ваш чат
    sendRequestToChat(username, phone);

    res.status(200).json({ success: true, message: 'Заявка успешно получена.' });
});

app.get('/status', (req, res) => {
    res.status(200).send('Я включился');
});

// Обработчик команды /delete
bot.onText(/\/delete (.+)/, (msg, match) => {
    const chatId = msg.chat.id;
    const requestedIndex = parseInt(match[1]) - 1; // Получаем индекс заявки из команды

    if (isNaN(requestedIndex) || requestedIndex < 0 || requestedIndex >= requests.length) {
        bot.sendMessage(chatId, 'Указанная заявка не найдена.');
    } else {
        requests.splice(requestedIndex, 1); // Удаляем заявку по индексу
        bot.sendMessage(chatId, `Заявка №${requestedIndex + 1} успешно удалена.`);
    }
});

// Запуск Express сервера
const PORT = 3333; // Порт, на котором будет работать сервер
app.listen(PORT, () => {
    console.log(`Сервер запущен на порте ${PORT}. Ожидание POST-запросов от вашего сайта...`);
});