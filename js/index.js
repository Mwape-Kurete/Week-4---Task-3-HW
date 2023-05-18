//Week 4 - Task 3 Homework 

calculateOperation = () => {
    let valueOne = document.getElementById("val1").value;
    let valueTwo = document.getElementById("val2").value;

    let operation = document.getElementById("operation").value;

    let answer;

    console.log(valueOne + " " + valueTwo + " " + operation);

    if (operation === "plus") {

        answer = (valueOne + valueTwo);

        alert("the answer is: " + answer);

    } else if (operation === "minus") {

        answer = valueOne - valueTwo;
        alert("the answer is: " + answer);

    } else if (operation === "times") {

        answer = valueOne * valueTwo;
        alert("the answer is: " + answer);

    } else {

        answer = valueOne / valueTwo;
        alert("the answer is: " + answer);
    }
}
