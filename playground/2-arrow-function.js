// const square = function (number) {
//     return number * number; 
// }

const { clear } = require("console");

// const square = (x) => { return x * x }

// const square2 = (x) => x * x;

// console.log(square(3));
// console.log(square2(3));


const even = {
    name: 'Birthday Party',
    guestList: ['Me', 'A russian ice skater', 'The Easter Bunny'],
    printGuestList: function () {
        console.log('Guest list for ' + this.name);
        this.guestList.forEach( (guest) => {
            console.log(guest + ' is attending ' + this.name);
        });
    }
}


even.printGuestList();