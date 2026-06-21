let employeeName = prompt("Enter Employee Name");
let employeeAge = prompt("Enter Employee Age");

alert(`Hello ${employeeName}`);

let companyChoice = confirm("Do you want to join our company?");

if (companyChoice) {
    alert(`Welcome ${employeeName}! Your age is ${employeeAge}.`);
} else {
    alert("Application Cancelled");
}

