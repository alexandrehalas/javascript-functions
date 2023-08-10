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
