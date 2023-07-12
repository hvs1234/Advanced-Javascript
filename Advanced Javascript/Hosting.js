// Hosting:- It is a mechanism where variables and functions declarations are moved to top of their scope before the code execute.
// Show undefined only var. But in let and const it will give an error in the execution phase.

f1 = ()=>
{
    console.log(name);
    var name = "harsh";
    name = "harshvardhan sharma";
} // Correct Hosting

f2 = ()=>
{
    console.log(num);
    let num = 2;
    num = 3;
} // Incorrect Hosting

f1(); f2()
