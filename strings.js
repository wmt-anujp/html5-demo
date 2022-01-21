const firstName = "Anuj";
let stringVariable = "<h1>This is heading</h1>" + "<p>This is paragraph</p>";

// stringVariable=stringVariable.concat("anuj"," ","panchal");
// console.log(stringVariable);
// console.log(stringVariable.length);
// console.log(stringVariable.toLowerCase());
// console.log(stringVariable.toUpperCase());

// console.log(stringVariable[4]);
// console.log(stringVariable.indexOf("paragraph"));
// console.log(stringVariable.lastIndexOf("This"));
// console.log(stringVariable.charAt(6));
// console.log(stringVariable.endsWith("paragraph</p>"));
// console.log(stringVariable.includes("heading"));
// console.log(stringVariable.substring(0, 3));
// console.log(stringVariable.slice(0, 7));
// console.log(stringVariable.split('>'));
// console.log(stringVariable.replace("heading", "anuj"));


let fruit1 = "orange";
let fruit2 = "apple";
let wholestring = `Hello ${firstName}
    <h1> This is heading </h1>
    <p> I like ${fruit1} and ${fruit2}
`;

document.body.innerHTML = wholestring;