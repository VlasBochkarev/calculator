let input1 = document.getElementById("number1");
let input2 = document.getElementById("number2");

let operationButton = document.getElementsByClassName("operationButton")

function makeOperation(operationCode) {
    let number1 = Number(input1.value);
    let number2 = Number(input2.value);
    let result = 0;
    if (operationCode === "+") {
        result = number1 + number2;
    } else if (operationCode === "-") {
        result = number1 - number2;
    } else if (operationCode === "*") {
        result = number1 * number2;
    } else if (operationCode === "/") {
        result = number1 / number2;
    } else {
        window.alert("Error opiration")
    }
    window.alert(result);
}

function onOperationButtonClick(eventObject) {
    let clickedElement = eventObject.currentTarget;
    let operation = clickedElement.innerHTML;
    makeOperation(operation)
}

for (let i = 0; i < operationButton.length; i++) {
    operationButton[i].addEventListener("click", onOperationButtonClick);
}