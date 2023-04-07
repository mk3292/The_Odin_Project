let currentVal = '';
let previousVal = '';
let operator = '';

function add(x, y) {
    return x + y;
}

function subtract(x, y) {
    return x-y;
}

function multiply(x, y) {
    return x*y;
}

function divide(x, y) {
    return x/y;
}

document.addEventListener("DOMContentLoaded", function() {
    let clear = document.querySelector(".clear");
    let equal = document.querySelector(".equal");
    let decimal = document.querySelector(".decimal");

    let numbers = document.querySelectorAll(".number");
    let operators = document.querySelectorAll(".operator");

    let first = document.querySelector(".first");
    let next = document.querySelector(".next");

    numbers.forEach((num) => 
        num.addEventListener("click", function (event) {
            handleNum(event.target.textContent);
            next.textContent = currentVal;
        })
    )

    operators.forEach((op) => 
        op.addEventListener("click", function (event) {
            handleOp(event.target.textContent);
            first.textContent = previousVal + " " + operator;
            next.textContent = currentVal;
        })
    )

    clear.addEventListener("click", function () {
        previousVal = '';
        currentVal = '';
        operator = '';
        first.textContent = currentVal;
        next.textContent = currentVal;
    })

    equal.addEventListener("click", function() {
        if (previousVal != '' && currentVal != '') {
            previousVal = Number(previousVal);
            currentVal = Number(currentVal);
            if (operator === '+') {
                next.textContent = add(previousVal, currentVal).toString();
                first.textContent = '';
            } else if (operator === '-') {
                next.textContent = subtract(previousVal, currentVal).toString();
                first.textContent = '';
            } else if (operator === 'x') {
                next.textContent = multiply(previousVal, currentVal).toString();
                first.textContent = '';
            } else if (operator === '/') {
                next.textContent = divide(previousVal, currentVal).toString();
                first.textContent = '';
            }
        }
    })

    decimal.addEventListener("click", function() {
        addDecimal();
    })
}) 

function handleNum(num) {
    if (currentVal.length <= 5) {
        currentVal += num;
    }
}

function handleOp(op) {
    operator = op;
    previousVal = currentVal;
    currentVal = '';
}

function addDecimal() {
    if (!currentVal.includes('.')) {
        currentVal += '.'; 
    }
}