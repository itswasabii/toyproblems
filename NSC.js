//Net salary calculator

let prompt = require("prompt-sync")();

function NetSalary() {

    let basicSalary = parseFloat(prompt("Enter basic salary?: "));
    let benefits = parseFloat(prompt("Enter benefits?: "));

    
    if (isNaN(basicSalary) || isNaN(benefits) || basicSalary < 0 || benefits < 0) {
        console.log(" enter a valid amount");
        return;
    }

}

let grossSalary = basicSalary + benefits;

