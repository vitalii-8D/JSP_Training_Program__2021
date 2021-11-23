//submit homework to the repository that you created for git lecture

// 1. Compute the exponent of a number (using recursion);
//8^2 = 8 x 8 = 64
const power = (number, pow) => {
   if (pow === 0) return 1;

   if (pow < 0) {
      return pow === -1 ? 1 / number : 1 / (number * power(number, Math.abs(pow) - 1))
   }
   if (pow > 0) {
      return pow === 1 ? number : number * power(number, pow - 1)
   }
}
// Uncomment for checking:
// console.log('2^3 = ' + power(2, 3));
// console.log('2^2 = ' + power(2, 2));
// console.log('2^1 = ' + power(2, 1));
// console.log('2^0 = ' + power(2, 0));
// console.log('2^-1 = ' + power(2, -1));
// console.log('2^-2 = ' + power(2, -2));
// console.log('2^1 = ' + power(2, -3));



// 2. Write functions min and max that will find min and max number in array using apply
// const numbers
const numbers1 = [5, 10, 12, 2, 7, 15, 8]
const numbers2 = [-10, 5, -3, 4, -12, 9, 7]

const minNumberInArr = (numbers) => Math.min.apply({}, numbers)
const maxNumberInArr = (numbers) => Math.max.apply({}, numbers)

// Uncomment for checking:
// console.log('Numbers1: ' + numbers1.toString());
// console.log('Min number in Numbers1 is - ' + minNumberInArr(numbers1));
// console.log('Max number in Numbers1 is - ' + maxNumberInArr(numbers1));
// console.log('Numbers2: ' + numbers2.toString());
// console.log('Min number in Numbers2 is - ' + minNumberInArr(numbers2));
// console.log('Max number in Numbers2 is - ' + maxNumberInArr(numbers2));



// 3. write a function displayCarDetails that will receive as argument ownerName 
//    and return a string with car registration number, brand and color.
//    Please make examples for three different cars

const cars = [
   {
      ownerName: 'Vasya',
      brand: 'Porsche',
      color: 'black',
      registrationNumber: 'BC2547AE'
   },
   {
      ownerName: 'Dima',
      brand: 'Moscvitch',
      color: 'orange',
      registrationNumber: 'AC8547BC'
   },
   {
      ownerName: 'Ira',
      brand: 'Maserati',
      color: 'white',
      registrationNumber: 'ZARABOTALA'
   }
]

const displayCarDetails = (ownerName) => {
   const car = cars.find(car => car.ownerName === ownerName)
   return car ?
      `${ownerName} have ${car.brand} ${car.color} color. Registration number is "${car.registrationNumber}"`
      : `I hope ${ownerName} is riding a bike :)`
}

// Uncomment for checking:
// console.log(displayCarDetails('Vasya'));
// console.log(displayCarDetails('Ira'));
// console.log(displayCarDetails('Kostya'));



// 4.We want this code to log out “hey amy”, but it logs out “hey arnold” - fix that 
 
function greet (person) {
  if (person.name === 'amy' ) {
    return 'hey amy'
  } else {
    return 'hey arnold'
  }
}
// const amy = {name: 'amy'}
// console.log(greet(amy)); // It`s OK here)



// 5.We want this code to log out the numbers 0, 1, 2, 3 in that order,
// but it doesn't do what we expect - fix that(find two solutions)

// 1st: we can catch i value in separate variable
for (var i = 0; i < 4; i++) {
   const number = i; // It was easy
  // setTimeout(() => console.log(number), 0)
}

// 2nd:  var > let
for (let i = 0; i < 4; i++) { // That was easier
   // setTimeout(() => console.log(i), 0)
}
