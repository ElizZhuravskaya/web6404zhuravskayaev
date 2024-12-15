const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 3000;

// Используем CORS для разрешения запросов с другого домена
app.use(cors());

// Маршрут для получения данных
app.get('/projects', (req, res) => {
    const projects = [
        { title: 'Реализация кодирования сообщений', link: 'https://github.com/ElizZhuravskaya/TK_Zhuravskaya_Teplyakova', year: 2024 },
        { title: 'Реализация тестирования на Python', link: 'https://github.com/ElizZhuravskaya/6404zhuravskayaev/tree/main', year: 2024 },
        { title: 'Реализация web-сайта', link: 'https://github.com/ElizZhuravskaya/web6404zhuravskayaev.git', year: 2024 },
    ];
    res.json(projects);
});

// Запуск сервера
app.listen(PORT, () => {
    console.log(`Сервер запущен на http://localhost:${PORT}`);
});
