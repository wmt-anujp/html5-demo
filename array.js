let marks = [34, 35, 85, 75, 41, 52];
const fruits = ["Orange", "Apple", "Stawberry"];
const mixed = ["str", 856, [56, 78]];

const arr = new Array(56, 56, 78, 98, "Orange");
console.log(arr);
console.log(marks);
console.log(fruits[2]);
console.log(mixed);
console.log(arr.length);
console.log(Array.isArray(marks));

let value = marks.indexOf(85);
console.log(value);

marks.push(100);
marks.unshift(99)
marks.pop()
marks.shift()
marks.splice(0, 3)
marks.reverse()
delete marks[2];
let marks2 = [1, 4, 5, 8, 6]
marks=marks.concat(marks2)
console.log(marks)

let myobj = {
    "name": "Anuj",
    "surname": "Panchal",
    marks:[78,67,89]
}

console.log(myobj.surname)
console.log(myobj['marks'])

const numbers = [34, 23, 12, 56, 78];
numbers.forEach((item, index, arr) => {
    console.log('a[' + index + ']=' + item);
})

for (const n of numbers) {
    console.log(n);
}