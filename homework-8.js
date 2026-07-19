// Задание 3
const user = {
  name: "Мухаммад",
  lastName: "Усманов",
  email: "mahomet1994@gmail.com",
  profession: "ИТ",
  position: "Разработчик",
  age: 32,
  country: "Россия",
  city: "Грозный",
  RelationshipStatus: "Женат"
}

console.log(user);

// Задание 4
const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2025,
  color: "black",
  transmission: "automatic",
}

car.carOwner = user;

console.log(car);

// Задача 5
function searchMaxSpeedCar (carObj, maxSpeed) {
  if (Object.hasOwn(carObj, "maxSpeed")) {
    return;
  }
  else {
    carObj.maxSpeed = "200км/ч"}
}

searchMaxSpeedCar(car, "200км/ч");      // передаем в параметрах только объект и значение, которое хотим добавить

console.log(car);

// Задача 6