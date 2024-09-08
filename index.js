function calculator(){
    let num1 = parseFloat(prompt("Enter first num: "));
    let num2 = parseFloat(prompt("Enter second num: "));
    let operator = prompt ("Enter the operator(+,-,*,/)")



    let result;
    if (operator === "+"){
        result = num1+ num2

    }else if(operator === "*"){
        result = num1* num2
    }else if (operator === "/"){
        result = num1/num2

    }else if (operator === "-"){
        result = num1-num2

    }else{
        console.log ("Invalid operator")
        return;
    }
    console.log(`The result is : ${result}`);
}
calculator();