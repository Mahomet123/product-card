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

// Задание 4
const car = {
  brand: "Toyota",
  model: "CamryX5",
  year: 2025,
  color: "black",
  transmission: "automatic",
}

const carOwner = {
  owner: "user"
}

const carInfo = {...car, ...carOwner}

console.log(carInfo)
