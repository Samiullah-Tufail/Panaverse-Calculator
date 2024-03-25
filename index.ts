#! /src/bin/env nodetsc

import inquirer from "inquirer";

const answers = await inquirer.prompt([
    {
        name:"firstNumber",
        message:"enter first number",
        type:"number"
    } ,     {
        name:"secondNumber",
        message:"enter second number",
        type:"number"
    },    {
        name:"operator",
        message:"Select Operator",
        type:"list",
        choices:["Add" , "Subtract" , "Multiply" , "Divide"]
    }
])
console.log(answers);

let result;

if(answers.operator==="Add")
{
    result=answers.firstNumber + answers.secondNumber
    
}else if(answers.operator==="Subtract")
{
    result=answers.firstNumber - answers.secondNumber
    
}else if(answers.operator==="Multiply")
{
    result=answers.firstNumber * answers.secondNumber
    
}else{
    result=answers.firstNumber / answers.secondNumber
}

console.log(`"Result is " ${result}`);