// Задача 3
// Создать структуру на ваш выбор, как было показано в лекции (имеется ввиду - с 
// машинами/бьюти-продуктами). Придумайте свою структуру и реализуйте наследуемость классов

class Phone {
  constructor(brand, name, price, cable) {
    this.brand = brand;
    this.name = name;
    this.price = price;
    this.cable = cable;
  }
  showInfo() {
    console.log(`Это ${this.brand} ${this.name}, цена: ${this.price} ₽. В комплекте ${this.cable}`);
  }
}

class PhonePackage extends Phone {
  constructor(brand, name, price, cable, charger) {
    super(brand, name, price, cable);
    this.charger = charger;
  }
  included() {
    console.log(`В комплект ${this.brand} всегда входит: ${this.charger} и ${this.cable}`);
  }

  showInfo() {
    super.showInfo();
    console.log(`В комплекте у ${this.brand} вы получите еще и ${this.charger}`);
  }
}

const iphone = new Phone('Apple', 'iPhone 17 Pro Max', 155000, 'кабель Type-C');
const samsung = new Phone('Samsung', 'Galaxy S26 Ultra', 140000, 'кабель Type-C');
iphone.showInfo();
samsung.showInfo();

const china = new PhonePackage('Xiaomi', '16 Ultra', 125000, 'кабель Type-C', 'зарядное устройство');
china.included();
china.showInfo();