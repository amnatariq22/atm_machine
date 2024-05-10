import inquirer from "inquirer";
import chalk from "chalk";
let mybalance = 10000;
let myPin = 1234;
console.log(chalk.blue("\n \twelcome to ATM machine\n\t"));
let pinAnswer = await inquirer.prompt([
    {
        name: "pin",
        message: chalk.yellow("enter your pin"),
        type: "number",
    },
]);
if (pinAnswer.pin === myPin) {
    console.log(chalk.green("\ncorrect pin code!!!\n"));
    let operationAns = await inquirer.prompt([
        {
            name: "operation",
            message: "please select option",
            type: "list",
            choices: ["withdraw", "check balance"],
        },
    ]);
    /*console.log(operations);*/
    if (operationAns.operation === "withdraw") {
        let withdrawAns = await inquirer.prompt([
            {
                name: "withdrawMethod",
                message: "Select a withdrawl method:",
                type: "list",
                choices: ["fast cash", "Enter Amount"],
            },
        ]);
        if (withdrawAns.withdrawMethod === "fast cash") {
            let fastcashAns = await inquirer.prompt([
                {
                    name: "fastcash",
                    message: "select Amount",
                    type: "list",
                    choices: [1000, 2000, 5000, 10000, 20000, 50000],
                },
            ]);
            if (fastcashAns.fastcash > mybalance) {
                console.log(chalk.red("Insufficinet balance"));
            }
            else {
                mybalance -= fastcashAns.fastcash;
                console.log(`${fastcashAns.fastcash}withdraw successfully`);
                console.log(`Your Remaining balance is: ${mybalance}`);
            }
        }
        else if (withdrawAns.withdrawMethod === "Enter Amount") {
            let amountAns = await inquirer.prompt([
                {
                    name: "amount",
                    message: "enter your amount",
                    type: "number",
                },
            ]);
            if (amountAns.amount > mybalance) {
                console.log("Insufficient balance");
            }
            else {
                mybalance -= amountAns.amount;
                console.log(`${amountAns.amount} Withdraw Successfully`);
                console.log("your remaining balance is: " + mybalance);
            }
        }
    }
    else if (operationAns.operation === "check balance") {
        console.log(`your balance is :` + mybalance);
    }
}
else {
    console.log(chalk.red("Incorrect pin number"));
}
