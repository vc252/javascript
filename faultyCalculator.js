
function faultyOperation(num1,num2,operator,faulty) {
    if (faulty) {
        switch(operator) {
            case '+':
                return num1 - num2;
                break;
            case '-': 
                return num1 / num2;
                break;
            case '*':
                return num1 + num2;
                break;
            case '/':
                return num1 ** num2;
                break;
        }
    } else {
        switch(operator) {
            case '+':
                return num1 + num2;
                break;
            case '-': 
                return num1 - num2;
                break;
            case '*':
                return num1 * num2;
                break;
            case '/':
                return num1 / num2;
                break; 
        }
    }
}

function main() {
    //we need to take prompt
    let num1 = Number(prompt("Enter the first number"));
    let num2 = Number(prompt("Enter the second number"));
    let operator = prompt("Enter the operator");

    let rand = Math.random()
    if (rand<=0.1) {
        //faulty
        console.log(faultyOperation(num1,num2,operator,true));
    } else {
        console.log(faultyOperation(num1,num2,operator,false));
    }
}

main()



