LET username = prompt("Username");
let password = prompt("Password");

if (username === "admin" && password === "12345") {

    alert("Login Successful");

    let employee = {
        name: prompt("Employee Name"),
        salary: Number(prompt("Salary")),
        experience: Number(prompt("Experience"))
    };

    let skills = ["HTML", "CSS", "JavaScript"];

    let attendance = confirm("Present Today?");

    let bonus = employee.salary >= 30000 ? 5000 : 2000;

    console.log("Employee Name : " + employee.name);
    console.log("Salary : " + employee.salary);
    console.log("Skills : " + skills);
    console.log("Attendance : " + attendance);
    console.log("Experience : " + employee.experience);

    console.log(`Bonus : ${bonus}`);
    console.log(`Total Salary : ${employee.salary + bonus}`);

} else {
    alert("Invalid Login");
}let username = prompt("Username");
let password = prompt("Password");

if (username === "admin" && password === "12345") {

    alert("Login Successful");

    let employee = {
        name: prompt("Employee Name"),
        salary: Number(prompt("Salary"))
    };

    let skills = ["HTML", "CSS"];

    let attendance = confirm("Present Today?");

    let experience = Number(prompt("Experience"));

    let bonus = employee.salary >= 30000 ? 5000 : 2000;

    let totalSalary = employee.salary + bonus;

    console.log(`Name : ${employee.name}`);
    console.log(`Salary : ${employee.salary}`);
    console.log(`Skills : ${skills}`);
    console.log(`Attendance : ${attendance}`);
    console.log(`Experience : ${experience}`);
    console.log(`Bonus : ${bonus}`);
    console.log(`Total Salary : ${totalSalary}`);

} else {

    alert("Invalid Login");

}
