class Drink {
  #temperature;

  constructor(name, size, temperature, price) {
    this.name = name;
    this.size = size;
    this.price = price;
    this.#temperature = temperature;
  }
  //получить информацию про напиток
  showInfo(){
    console.log(`Напиток ${this.name}, с объемом ${this.size} мл, температура ${this.#temperature} °C, стоимость ${this.price} ₽.`);
  }
  //получить температуру напитка
  showTemp() {
    console.log(`Температура напитка ${this.name} установлена ${this.#temperature} °C`);
    return this.#temperature;
  }
  //установить температуру напитка
  setTemp(temperature) {
    this.#temperature = temperature;
  }
  //приготовить напиток (приватный)
  #prepareDrink() {
    console.log(`Ваш напиток ${this.name}, с объемом ${this.size} мл, температурой ${this.#temperature} °C, стоимость ${this.price} ₽ готовится.`);
  }
  //подать напиток
  serveDrink() {
    this.#prepareDrink();
    console.log(`Ваш напиток ${this.name}, с объемом ${this.size} мл, температурой ${this.#temperature} °C, стоимость ${this.price} ₽ готов.`);
  }
}
  //деалем кофе
class Coffee extends Drink {
  constructor(name, size, temperature, price, beans, milk) {
    super(name, size, temperature, price);
    this.beans = beans;
    this.milk = milk;
  }

  serveDrink() {
    super.serveDrink();
    console.log(`Ваш напиток ${this.name}, с зернами ${this.beans} и с ${this.milk}, объемом ${this.size} мл, температурой ${this.showTemp()} °C, стоимость ${this.price} ₽ готов.`);
  }
}
//делаем сок
class Juice extends Drink {
  constructor(name, size, temperature, price, taste, sugar) {
    super(name, size, temperature, price);
    this.taste = taste;
    this.sugar = sugar;
  }
  serveDrink() {
    super.serveDrink();
    console.log(`Ваш напиток ${this.name}, из свежего ${this.taste}, без ${this.sugar}, объемом ${this.size} мл, температурой ${this.showTemp()} °C, стоимость ${this.price} ₽ готов.`);
  }
}
//делаем чай
class Tea extends Drink {
  constructor(name, size, temperature, price, type, sugar) {
    super(name, size, temperature, price);
    this.type = type;
    this.sugar = sugar;
  }
  serveDrink() {
    super.serveDrink();
    console.log(`Ваш напиток ${this.name}, с ${this.type}, и с ${this.sugar}, объемом ${this.size} мл, температурой ${this.showTemp()} °C, стоимость ${this.price} ₽ готов.`);
  }
}
  //кафе для заказов
class Cafe {
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  //получить информацию про кафе
  showInfoCafe() {
    console.log(`Кафе ${this.name}, находится по адресу ${this.location}`);
  }
  //заказать напиток
  orderDrink(drink) {
    console.log(`Ваш заказ ${drink.name} принят.`);
    drink.serveDrink();
  }
}

const coffee = new Coffee('Черное кофе', 250, 80, 150, 'арабика', 'молоком');
console.log(coffee);
const juice = new Juice('Апельсиновый', 250, 10, 200, 'апельсина', 'сахара');
console.log(juice);
const tea = new Tea('Зеленый чай', 250, 70, 50, 'мятной', 'сахаром');
console.log(tea);

const cafe = new Cafe('Камета', 'Где-то там');

cafe.showInfoCafe();
cafe.orderDrink(juice);
cafe.orderDrink(coffee);
cafe.orderDrink(tea);

coffee.setTemp(90);
coffee.showTemp();
coffee.showInfo();

tea.setTemp(85);
tea.showTemp();
tea.showInfo();

juice.setTemp(20);
juice.showTemp();
juice.showInfo();