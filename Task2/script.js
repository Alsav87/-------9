const consoleLog = document.querySelector("#consoleLog"); 

consoleLog.addEventListener("click", () => {
    alert("Метод для вывода сообщений в веб-консоль");
})

const alert1 =  document.querySelector("#alert1");
alert1.addEventListener("click", () => {
    alert("Модальное окно вывода информации в браузере");
});

const prompt =  document.querySelector("#prompt");
prompt.addEventListener("click", () => {
    alert("Выводит модальное окно с заголовком title, полем для ввода текста, заполненным строкой по умолчанию default и кнопками OK/CANCEL.");
});