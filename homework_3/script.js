class Good {

    constructor(id, name, description, sizes, price, available) {

        this.id = id;

        this.name = name;

        this.description = description;

        this.sizes = sizes;

        this.price = price;

        this.available = available;
    }

    setAvailable() {
            return this.available = true
    }
}


class GoodsList {
    #goods = [];

    constructor(goods, filter, sortPrice, sortDir) {

        this.#goods = goods;

        this.filter = filter;

        this.sortPrice = sortPrice;

        this.sortDir = sortDir;
    }

    get list() {

        let temporaryList = [];

        for (let index = 0; index < this.#goods.length; index++) {
            // console.log(this.#goods[index].name)
            if (this.filter.test(this.#goods[index].name) === true) {

                temporaryList.push(this.#goods[index]);
                }
            }


        let sortedList = function(a,b) {

            if (this.sortPrice === true) {

                if (this.sortDir === true) {
                    return a.price - b.price;
                    }
                if (this.sortDir === false) {
                    return b.price - a.price;
                    }
                }
            }

        return temporaryList.sort(sortedList.bind(GoodsList))
    }


    add(newGood) {
        this.#goods.push(newGood);
        let result = this.#goods;
        return result
    }


    remove(idForDel) {

        let trigger = false

        this.#goods.forEach((good, index) => {
            if (good.id === idForDel) {;
                this.#goods.splice(index, 1);
                trigger = true
                }
            })

        let newGoods = this.#goods;

        if (trigger === true) {
            return newGoods
        } else {
            return "Товар не найден"
        }
    }


    filterAvailable () {
        const result = this.#goods.filter(good => good.available === true)
        return result;
    }
}


class BasketGood extends Good {

    constructor(currentGood, amount) {

            super(currentGood);

            this.amount = amount;

            this.id = currentGood.id;

            this.name = currentGood.name;

            this.sizes = currentGood.sizes;

            this.price = currentGood.price;

            this.available = currentGood.available
    }
}


class Basket {
    constructor() {

        this.goods = [];
    }



    get totalAmount () {
        // this.removeUnavailable()
        let result = this.goods.reduce(function(totalAmount, good) {
            return totalAmount + good.amount * good.price;
          }, 0);

        return result
    }


    get totalSum () {
        // this.removeUnavailable()
        let result = this.goods.reduce(function(totalSum, good) {
            return totalSum + good.amount
          }, 0);

        return result
    }

    add (good, amount) {

        if (!(typeof amount === "number")) {
          throw new Error("Введите количество");
        }

        if (amount < 0) {this.remove(good, amount)

        }else{


        let trigger = false
        for (let index = 0; index < this.goods.length; index++) {
            if (this.goods[index].id === good.id) {
                this.goods[index].amount = this.goods[index].amount + amount
                trigger = true
                break
            }
        }
        if (trigger === false) {

            this.goods.push(good)
            }
        }
    }


    remove (good, amount) {

      if (!(typeof amount === "number")) {
        throw new Error("Введите количество");
      }

        const idList = this.goods.map((currentGood) => currentGood.id)

        if (idList.includes(good.id) === true) {

            for (let index = 0; index < this.goods.length; index++) {

                if (this.goods[index].id === good.id) {
                    this.goods[index].amount = this.goods[index].amount + amount;
                    }
                if (this.goods[index].amount < 0) {
                    this.goods.splice(index, 1);
                    }
            }

        }
    }

    clear() {
        this.goods.splice(0, this.goods.length)
    }

    removeUnavailable() {
        this.goods = this.goods.filter(good => good.available === true)
        return this.goods;
    }


}


// Создание объектов
const good1 = new Good (
    1,
    "Майка мужская зеленая",
    "хлопок 95 %, лайкра 5 %",
    ["L", "XL", "XXL"],
    355,
    true,
    );

const good2 = new Good (
    2,
    "Рубашка",
    "хлопок 100 %",
    ["XL", "XXL"],
    955,
    true
    );

const good3 = new Good (
    3,
    "Рубашка приталенная",
    "хлопок 100 %",
    ["M", "L", "XL", "XXL"],
    1000,
    true
    );

const good4 = new Good (
    4,
    "Пиджак серый",
    "хлопок 100 %",
    ["M", "L", "XL", "XXL"],
    3555,
    false
    );

const good5 = new Good (
    5,
    "Брюки серые",
    "хлопок 100 %",
    ["M", "L", "XL", "XXL"],
    1550,
    false
    );



const goodsAll = []
    goodsAll.push(good1)
    goodsAll.push(good2)
    goodsAll.push(good3)
    goodsAll.push(good4)
    goodsAll.push(good5)

// Создание экземпляра каталога
// Создаю filter
regexp  = /(Рубашка|Пиджак)/i
const newCatalogue = new GoodsList(goodsAll, regexp, true, true)

// Создание экземпляра товара для корзины
const newBasketGood1 = new BasketGood(good1, 11)
const newBasketGood2 = new BasketGood(good2, 11)
const newBasketGood3 = new BasketGood(good3, 11)
const newBasketGood4 = new BasketGood(good4, 11)
const newBasketGood6 = new BasketGood(good5, 11)
// console.log(newBasketGood1);
// console.log(newBasketGood2);


const newBasket = new Basket()
// console.log(newBasket);


newBasket.add(newBasketGood1, newBasketGood1.amount)
// console.log(newBasket);


newBasket.add(newBasketGood1, 12)
// console.log(newBasket);


newBasket.add(newBasketGood4, 3)
// console.log(newBasket);


// newBasket.clear()
// console.log(newBasket);


newBasket.removeUnavailable()
console.log(newBasketGood1.amount);



console.log("Общее стоимость = " + newBasket.totalAmount);
console.log("Общая сумма = " + newBasket.totalSum);
