const goods = {
    1 : {
        id: 1,
        name: "Майка мужская зеленая",
        description: "хлопок 95 %, лайкра 5 %",
        sizes: ["L", "XL", "XXL"],
        price: 355,
        available: true,
    },
    2 : {
        id: 2,
        name: "Рубашка",
        description: "хлопок 100 %",
        sizes: ["XL", "XXL"],
        price: 955,
        available: true
    },
    3 : {
        id: 3,
        name: "Рубашка приталенная",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 1000,
        available: true
    },
    4 : {
        id: 4,
        name: "Пиджак серый",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 3555,
        available: false
    },
    5 : {
        id: 5,
        name: "Брюки серые",
        description: "хлопок 100 %",
        sizes: ["M", "L", "XL", "XXL"],
        price: 1550,
        available: false
    },
};

const basket = [
    {
        good: 1,
        amount: 3,
    },
    {
        good: 2,
        amount: 2,
    },
    {
        good: 3,
        amount: 1,
    },
];


function addOneGood(good, amount) {
    basket.push({"good":good, "amount": amount});
    return basket;
}
// Проверка addOneGood
console.log(addOneGood(process.argv[2], process.argv[2]));


function delOneGood(good) {
    basket.splice(good, 1);
    return basket;
}
// Проверка delOneGood();
// console.log(delOneGood(process.argv[2]));


function clearBasket() {
    basket.splice(0, basket.length);
    return basket;
}
// Проверка clearBasket();
// console.log(clearBasket());

function total() {

    let totalSumm = 0
    let totalAmount = 0

    for (let basketPosition = 0; basketPosition < basket.length; basketPosition++) {

        totalSumm = totalSumm + basket[basketPosition].amount * goods[basket[basketPosition].good].price

        totalAmount = totalAmount + basket[basketPosition].amount

    };

    let totals = {
        "totalAmount": totalAmount,
        "totalSumm": totalSumm,
        };
    return totals;
};

// Проверка function total();
// console.log(total());
