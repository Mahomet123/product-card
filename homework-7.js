// Задание 3
let city = 'Грозный';
let temperature = 30;
const tempCity = `Сейчас в городе ${city} температура - ${temperature} градусов по Цельсию`;
console.log(tempCity);

// Задание 4
const LIGHT_SPEED = 299792458;
function logLightSpeed(speed) {
  console.log(speed);
  if (speed > LIGHT_SPEED) {
    console.log('Сверхсветовая скорость');
  } else if (speed === LIGHT_SPEED) {
    console.log('Скорость света');
  }  else {
    console.log('Субсветовая скорость');
}};

logLightSpeed(399792458)    // Сверхсветовая скорость
logLightSpeed(199792458)    // Субсветовая скорость
logLightSpeed(299792458)    //Скорость света

// Задание 4 с использованием терального оператора
//Скорость света берем из константа выше и далее выполняем функцию
function logLightSpeed2 (speed2) {
  console.log(speed2);
  console.log(
    speed2 > LIGHT_SPEED ? 'Сверхсветовая скорость':
    speed2 === LIGHT_SPEED ? 'Скорость света':
    'Субсветовая скорость'
)};

logLightSpeed2(399792458)    // Сверхсветовая скорость
logLightSpeed2(199792458)    // Субсветовая скорость
logLightSpeed2(299792458)    //Скорость света

// Задание 5
let apple = 'Яблоки Голден';
let buyProduct = 150;

function budget (calculation) {
  if (buyProduct <= calculation) {
    console.log('Товар', apple, 'приобретён. Спасибо за покупку!');
  } else {console.log('Вам не хватает', (buyProduct - calculation) + '$ пополните баланс')
}};

budget (200);
budget (100);

// Задание 6
function myName (name) {
  console.log(name);
  return name;
}
myName ("Мухаммад");

// Задание 7
const myName = Мухаммад
let age = 32
let city = Грозный