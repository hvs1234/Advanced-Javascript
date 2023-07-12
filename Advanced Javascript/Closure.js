// Closures:- It is the combination of function bundled together with references to its surrounding state.
// We and perform the operations from a paremeter and a variable toegther because of closure.

const outer = (a) =>{
    let b = 10;
    const inner = ()=>{
        let sum = a+b;
        console.log(`Sum of ${a} and ${b} is: ${sum}`);
    }
    inner();
}
outer(5);