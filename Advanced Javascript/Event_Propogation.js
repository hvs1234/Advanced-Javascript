// The Event propogation mode determines in which the order elements receive the event.
// Event Bubbling phase:- Event goto bottom to top. First captured and handled the innermost element and then propogated to outermost elements.
// Event Capturing phase:- Event goto top to bottom. First captured and handled the outermost element and then propogated to innermost elements. Capturing is also called "trickling" which helps to remember the propogated order.
// 1- Event Bubbling is default phase.

bubbling = ()=>
{
    const parentId = document.querySelector("#parentDiv");
    const childId = document.querySelector("#childDiv");

    parentId.addEventListener('click',()=>{
        alert("You clicked on parent div");
    });

    childId.addEventListener('click',()=>{
        alert("You clicked on child div");
        // event.stopPropagation();
    });
}

// 2- Event Capturing:-

capturing = ()=>
{
    const parentId = document.querySelector("#parentDiv");
    const childId = document.querySelector("#childDiv");

    parentId.addEventListener('click',()=>{
        alert("You clicked on parent div");
        // event.stopPropagation();
    },true);

    childId.addEventListener('click',()=>{
        alert("You clicked on child div");
    },true);
}
