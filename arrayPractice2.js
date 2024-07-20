//remove - and convert to camelCase
console.log(camelize("background-color") == 'backgroundColor')
console.log(camelize("list-style-image") == 'listStyleImage')
console.log(camelize("-webkit-transition") == 'WebkitTransition')

let dashFound = false;

function camelize(str) {
    return str.split('-')
    .map((word,index)=>(index==0) ? word : word[0].toUpperCase() + word.slice(1))
    .join('');
}

//filter elements higher than a and lower than b
let arr = [5, 3, 8, 1];

let filtered = filterRange(arr, 1, 4);
console.log(filtered);

function filterRange(arr,low,high) {
    return arr.filter((value)=>(value>=low && value<=high));
} 

arr = [5, 3, 8, 1];
filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
console.log(arr);
function filterRangeInPlace(arr,a,b) {
    arr.forEach((value,index) => {
        if (value>b || value<a) {
            arr.splice(index,1);
        }
    });
}

//make a copy of array and sort it
function sortCopy(arr) {
    return arr.slice().sort();
}
console.log(sortCopy(arr));

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let users = [ john, pete, mary ];

let names = users.map((user)=>user.name);
console.log(names);

john = { name: "John", surname: "Smith", id: 1 };
pete = { name: "Pete", surname: "Hunt", id: 2 };
mary = { name: "Mary", surname: "Key", id: 3 };

users = [ john, pete, mary ];

let userMapped = users.map((user)=>{
    return {
        name: user.name,
        id: user.id,
    }
})

console.log(userMapped);