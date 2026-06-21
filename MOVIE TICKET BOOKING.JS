let customer = "NANDHAKUMAR";

let movie = "DRAGON(TELUGU)";
let ticketPrice = 150;
let quantity = 10;

let total = ticketPrice * quantity;

let confirmBooking = true;

let status = confirmBooking
    ? "Booking Successful"
    : "Booking Cancelled";

console.log("===== MOVIE TICKET BOOKING =====");
console.log(`Customer : ${customer}`);
console.log(`Movie : ${movie}`);
console.log(`Ticket Price : ${ticketPrice}`);
console.log(`Quantity : ${quantity}`);
console.log(`Total Amount : ${total}`);
console.log(`Status : ${status}`);
