
// Задание 4
// Записать в переменную случайное целое число в диапазоне [0; 100]. Используйте объект Math.
// При возникновении проблем по ходу решения вы всегда можете обратиться к ментору в Slack. 

// воспользовалась документацией

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
    // The maximum is inclusive and the minimum is inclusive
}

const g = getRandomIntInclusive(0, 100);
console.log(g);

