'use strict';

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