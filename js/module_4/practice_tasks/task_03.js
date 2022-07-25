// Створити функцію яка приймає марку авто і колбек функцію для пошуку авто, функція повертає в консоль кількість знайдених авто , марку авто, модель і вартість авто і шукає в обекте cars
// Кількість знайдених автомобілів 2:
// 1. Honda Accord, ціна 20000
// 2. Honda Civic, ціна 12000
// Колбек функцію приймає марку авто в обєкті cars, повертає масив айдішніків

const cars = {
  id1: {
    car: 'Honda',
    type: 'Civic',
    price: 12000,
  },
  id2: {
    car: 'Audi',
    type: 'Q7',
    price: 40000,
  },
  id3: {
    car: 'BMW',
    type: '5 siries',
    price: null,
  },
  id4: {
    car: 'Honda',
    type: 'Accord',
    price: 20000,
  },
  id5: {
    car: 'Volvo',
    type: 'XC60',
    price: 7000,
  },
};

const getCars = (carModel, callback) => {
  const result = callback(carModel);

  console.log(`Кількість знайдених автомобілів ${result.length}:`);
  result.forEach((key, index) =>
    console.log(
      `${index + 1}. ${cars[key].car} ${cars[key].type}, ціна ${
        cars[key].price
      }`
    )
  );
};

const showCars = carModel => {
  return Object.keys(cars).filter(key => cars[key].car === carModel);
};

getCars('Honda', showCars);
console.log();
getCars('BMW', showCars);
