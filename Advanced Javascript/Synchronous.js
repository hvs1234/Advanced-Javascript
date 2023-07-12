// Synchronous:- Can do a work and perform one task at a time. We have to wait until the remaining task is to be done. Then it will move to next task.
// Asynchronous:- Perform a multiple task at a time by their remaining time periods. If the first task is going on 10 min and next task is going on 12 sec, so the 2 second task will be completed and on other hand first task will be continue at same time.

const prompt = require("prompt-sync")();
let choice = prompt("Enter the choice from [1 and 2]: ");
switch(choice)
{
    case '1':
        // Synchronous:- 
        f2 = ()=>{console.log("func 2 called");}
        f1 = ()=>{
            console.log("func 1 called");
            f2();
            console.log("func 1 called again");
        }
        f1();
        break;
    case '2':
        // Asynchronous:- 
        f2 = ()=>{
            setTimeout(()=>{
                console.log("func 2 called");
            },2000);
        }
        f1 = ()=>{
            console.log("func 1 called");
            f2();
            console.log("func 1 called again");
        }
        f1();
        break;
    default:
        console.log("Invalid Choice!");
        break;
}
