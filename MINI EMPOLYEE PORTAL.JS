let employee = {
    name: "Nandhakumar",
    id: 101,
    department: "IT",
    experience: 2
};

let skills = ["HTML", "CSS", "JavaScript"];

let salary = 35000;
let bonus = 5000;
let totalSalary = salary + bonus;

let username = "admin";
let password = "12345";

let loginStatus =
    username === "admin" && password === "12345"
        ? "Login Successful"
        : "Invalid Credentials";

let attendance = true;
let attendanceStatus = attendance ? "Present" : "Absent";

let experienceStatus =
    employee.experience >= 2
        ? "Experienced Employee"
        : "Fresher";

let employeeName = employee.name;

let proceed = true;

console.log("===== MINI EMPLOYEE PORTAL =====");

console.log(`Employee Name : ${employeeName}`);
console.log(`Employee ID : ${employee.id}`);
console.log(`Department : ${employee.department}`);

console.log(`Skills : ${skills.join(", ")}`);

console.log(`Salary : ${salary}`);
console.log(`Bonus : ${bonus}`);
console.log(`Total Salary : ${totalSalary}`);

console.log(`Login Status : ${loginStatus}`);
console.log(`Attendance Status : ${attendanceStatus}`);
console.log(`Experience Status : ${experienceStatus}`);

console.warn("Attendance Checked");

console.log("No Errors Found");

console.log(`Continue : ${proceed}`);

