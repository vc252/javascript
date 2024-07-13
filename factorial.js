
function factorial(num) {
    let arr = Array.from(Array(num+1).keys());
    return arr;
}

function main() {
    let num = Number(prompt("Enter number for the factorial"));
    console.log(factorial(num).slice(1,).reduce((a,b)=>{
        return a*b;
    }));
}

main();