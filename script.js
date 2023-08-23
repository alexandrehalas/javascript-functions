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

/*
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
*/

/*
// THE CALL AND APPLY METHODS

const lufthansa = {
  airline: 'Lufthansa',
  code: 'LH',
  bookings: [],
  //book : function() {}
  book(flightNumber, passangerName) {
    console.log(
      `${passangerName} booked a seat on ${this.airline} flight ${flightNumber}`
    );
    this.bookings.push({
      flight: `${this.airline}${flightNumber}`,
      name: `${passangerName}`,
    });
  },
};

lufthansa.book(123, 'Alexandre');
lufthansa.book(456, 'Elizabete');
console.log(lufthansa.bookings);

const eurowings = {
  airline: 'Eurowings',
  code: 'EU',
  bookings: [],
};

const book = lufthansa.book;

//doesnt work
//book(789, 'Gabriel');

// CALL method
book.call(eurowings, 789, 'Gabriel');
console.log(eurowings.bookings);

book.call(lufthansa, 901, 'Giulia');
console.log(lufthansa.bookings);

// APPLY method
// it not more used in modern javascript way
book.apply(lufthansa, [234, 'Afonso']);
console.log(lufthansa.bookings);

// this is used now
book.call(lufthansa, ...[567, 'Josiane']);
console.log(lufthansa.bookings);

// BIND method
//book.call(eurowings, 789, 'Gabriel');
const bookEurowings = book.bind(eurowings);
const bookLufthansa = book.bind(lufthansa);

bookEurowings(890, 'Gabrielly');
bookLufthansa(98, 'Giulia');

const bookEurowings123 = book.bind(eurowings, 123);
bookEurowings123('Halas');
bookEurowings123('Halas Halas');

//BIND with event listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);
  lufthansa.planes++;
  console.log(this.planes);
};

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial application pattern

const addTax = (rate, value) => value + value * rate;

console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
console.log(addVAT(200));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(200));
*/

//IMMEDIATELY INVOKED FUNCTION EXPRESSIONS (IIFE)

// Run function immediately without save it in somewhere

// add parentesis makes transform the statement into an expression

// IIFE pattern
(function () {
  console.log('This will never run again');
  //const itsNotAccessibleExternallyFromThisBlock = 23;
})();

(() => console.log('This will ALSO never run again'))();
