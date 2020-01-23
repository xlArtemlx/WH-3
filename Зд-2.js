var notebook = {
    brand: prompt("Укажите бренд вашего ноутбука"),
    type:  prompt("Тип"),
    model: prompt("Укажите вашу модель"),
    ram: prompt("обем оперативной памяти"),
    size: prompt("размеры"),
    weight: prompt("вес"),
    resolution: {
        width: prompt("ширину экрана"),
        height: prompt("высоту экрана"),
    },
};

var phone = {
    brand: prompt("Укажите бренд вашего телефона"),
    model: prompt("Укажите вашу модель"),
    ram: prompt("обем оперативной памяти"),
    color: prompt("цвет"),
};

var person = {
    name: prompt("Укажите ваше имя"),
    surname: prompt("Фамилию"),
    married: confirm("Женат?/Замужем?"),
}