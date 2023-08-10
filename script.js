'use strict';

/*

// DEFAULT PARAMETERS

const bookings = [];

// ES6 default parameters
const createBooking = function(flightNumber, passengersNumber = 1, price = 100 * passengersNumber) {

    // ES5 default parameters
    // passengersNumber = passengersNumber || 1;
    // price = price || 300;

    const booking = {
        flightNumber,
        passengersNumber,
        price
    }
    console.log(booking);
    bookings.push(booking);
}

createBooking('LH123')
createBooking('LH456', 2)
createBooking('LH789', 10, 1000)

// how set third parameter and leave second parameter as default value?

createBooking('LH900', undefined, 2000)

*/

/*
// PASSING ARGUMENTS: VALUE VS REFERENCE

const flight = 'LH123';

const passenger = {
  name: 'Alexandre Halas',
  passport: '123456789',
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH456';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === '123456789') {
    console.log('check in');
  } else {
    console.log('wrong passport');
  }
};

const newPassport = function (passenger) {
  passenger.passport = Math.trunc(Math.random() * 1000000000);
};

checkIn(flight, passenger);
newPassport(passenger);
checkIn(flight, passenger);

console.log(flight);
console.log(passenger);
*/
/*
// FUNCTIONS WITH CALLBACK

const oneWord = function (str) {
  return str.replaceAll(' ', '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// HIGHER FUNCTION
const transformer = function (str, fn) {
  console.log(`Original String: ${str}`);
  console.log(`Transformed String: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is really cool!', oneWord);
console.log('');
transformer('JavaScript is really cool!', upperFirstWord);

const high5 = function () {
  console.log('✋');
};
console.log('');
['a', 'b', 'c'].forEach(high5);
*/

// FUNCTIONS RETURNING FUNCTIONS

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greet2 = greeting => name => console.log(`${greeting} ${name}`);

const greeterHey = greet('Hey');
greeterHey('Alexandre');
greeterHey('Elizabete');

greet('Hello')('World');

const greeterHello2 = greet2('Hey');
greeterHello2('Alexandre');
greeterHello2('Elizabete');

greet2('Hello')('World');
