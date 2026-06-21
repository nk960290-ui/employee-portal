let customer = prompt("Enter Customer Name");

let movie = "Coolie";
let ticketPrice = 150;
let quantity = 2;

let total = ticketPrice * quantity;

let confirmBooking = confirm("Do you want to book the ticket?");

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

alert(status);
