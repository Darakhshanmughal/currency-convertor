#! /usr'bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.green.bold("welcome to 'code with darakhshan'_converted currency. "));
let exchange_Rate = {
    "USD": 1,
    "EUR": 0.9,
    "JPY": 113,
    "CAD": 1.3,
    "AUD": 1.65,
    "PKR": 277.42,
};
let user_answer = await inquirer.prompt([
    {
        name: "from_currency",
        type: "list",
        message: "select the currency to convert from",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
    },
    {
        name: "to_currency",
        type: "list",
        message: "select the currency to convert into",
        choices: ["USD", "EUR", "JPY", "CAD", "AUD", "PKR"],
    },
    {
        name: "amount",
        type: "input",
        message: "enter the amount to convert",
    }
]);
let from_currency = user_answer.from_currency;
let to_currency = user_answer.to_currency;
let amount = parseFloat(user_answer.amount);
let from_amount = exchange_Rate[from_currency];
let to_amount = exchange_Rate[to_currency];
let base_amount = amount / from_amount;
let converted_amount = base_amount * to_amount;
console.log(`converted Amount = ${converted_amount.toFixed(2)}`);
