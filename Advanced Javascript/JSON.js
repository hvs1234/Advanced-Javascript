// Convert object to JSON:-

var obj1 = {
    name:"harsh",
    age:26,
    work:"React Developer"
}

var objstring1 = JSON.stringify(obj1);
console.log(objstring1);

// Convert JSON to object:-

var objstring2 = JSON.parse(objstring1);
console.log(objstring2);
