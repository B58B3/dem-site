// Пример простого диалога с пользователем
document.addEventListener("DOMContentLoaded", function() {
    let userName = prompt("Введите ваше имя:");
    if (userName) {
        alert("Добро пожаловать, " + userName + "!");
    }
});
