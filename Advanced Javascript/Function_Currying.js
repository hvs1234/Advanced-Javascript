// Function Currying:- It is a technique for evaluating a function with mutiple arguments, into sequence of function with single argument.

const prompt = require("prompt-sync")();
const choice = prompt("Enter the choice from [1 and 2]: ")
switch(choice)
{
    case '1':
        sum = (num1)=>
        {
            return function(num2)
            {
                return function(num3)
                {
                    let sum = num1+num2+num3;
                    console.log(num1,num2,num3);
                    console.log(`Sum of ${num1}+${num2}+${num3} = ${sum}`);
                }
            }
        }
        sum(5)(2)(6);
        break;
    default:
        console.log("Invalid Choice!");
}