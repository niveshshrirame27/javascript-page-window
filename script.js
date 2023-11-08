function calculate() {
    // Get user input values for x and y
    let x = parseFloat(document.getElementById("inputX").value);
    let y = parseFloat(document.getElementById("inputY").value);

    // Check if the inputs are valid numbers
    if (!isNaN(x) && !isNaN(y)) {
        let z = x + y;
        document.getElementById("ex-1-result").innerHTML = "the result of x + y is : " + z;
    } else {
        document.getElementById("ex-1-result").innerHTML = "Please enter valid numbers for x and y.";
    }
}

document.getElementById("showExecutionButton-1").addEventListener("click", function () {
    const solution = document.querySelector(".execution-1");
    if (solution.style.display === "none") {
        solution.style.display = "block";
        document.getElementById("showExecutionButton-1").textContent = "Hide Execution";
    } else {
        solution.style.display = "none";
        document.getElementById("showExecutionButton-1").textContent = "Show Execution";
    }
});

function updateClock() {

    const now = new Date();
    const timeElement = document.getElementById("time");

    let hours = now.getHours();
    const isPm = hours >= 12;

    if (hours > 12) {
        hours -= 12;
    }

    hours = hours.toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');

    timeElement.textContent = `${hours}:${minutes}:${seconds} ${isPm ? "PM" : "AM"}`;

}

updateClock();

setInterval(updateClock, 1000);

document.getElementById("showExecutionButton-2").addEventListener("click", function () {
    const solution = document.querySelector(".execution-2");
    if (solution.style.display === "none") {
        solution.style.display = "block";
        document.getElementById("showExecutionButton-2").textContent = "Hide Execution";
    } else {
        solution.style.display = "none";
        document.getElementById("showExecutionButton-2").textContent = "Show Execution";
    }
});