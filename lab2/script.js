document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();  // Отменяем стандартное поведение формы

    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Проверка данных
    if (!email || !message) {
        alert('Заполните все поля!');
        return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert('Введите правильный email');
        return;
    }

    // Отправка данных на сервер (пример асинхронного запроса)
    fetch('https://your-server-endpoint.com', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, message })
    })
    .then(response => response.json())
    .then(data => {
        alert('Сообщение отправлено');
    })
    .catch(error => {
        console.error('Ошибка:', error);
        alert('Ошибка при отправке');
    });
});
