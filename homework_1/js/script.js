let n = 0

let numGame = Math.floor(Math.random() * 1000);
console.log(numGame)

while (n !== 7) {


let numUser = prompt(`Введите число от 0 до 999. Это ваша ${n + 1}-я попытка!`);


if (n + 1 === 7){
    alert(`У вас кончились попытки!`);
    break;
} else if (isNaN(numUser)) {
    alert(`Это не цифра ${numUser}. Попробуйте еще раз!`);
} else if (+numUser > 999) {
    alert(`Вы вышли за диапозон ${+numUser}, введите число от 0 до 999`);
} else if (numGame === +numUser) {
    alert(`Вы угадали загаданное число. Это действительно ${numGame}!`);
    break;
} else if (numGame < +numUser) {
    alert(`Ваше число ${+numUser} больше.`);
} else if (numGame > +numUser) {
    alert(`Ваше число ${+numUser} меньше.`);
}

n++;
};
