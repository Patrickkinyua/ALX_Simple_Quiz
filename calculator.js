function add (number1, number2) {
  return number1 + number2;
}

function subtract (number1, number2){
    return number1 - number2;
}

function multiply (number1, number2) {
    return number1 * number2;
}

function divide (number1, number2) {
   return number1 / number2;
}

document.getElementById("add").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = add(num1, num2);
    document.getElementById("calculation-result").innerText = result;
});

document.getElementById("subtract").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = subtract(num1, num2);
    document.getElementById("calculation-result").innerText = result;
});

document.getElementById("multiply").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = multiply(num1, num2);
    document.getElementById("calculation-result").innerText = result;
});

document.getElementById("divide").addEventListener("click", function() {
    const num1 = parseFloat(document.getElementById("number1").value);
    const num2 = parseFloat(document.getElementById("number2").value);
    const result = divide(num1, num2);
    if (num2 === 0) {
        document.getElementById("calculation-result").textContent = "Cannot divide by zero";
        return;
    }
    document.getElementById("calculation-result").innerText = result;
});