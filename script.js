


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

function toggleSolution(buttonId, solutionClass) {
    const button = document.getElementById(buttonId);
    const solution = document.querySelector(solutionClass);

    button.addEventListener("click", function () {
        if (solution.style.display === "none" || solution.style.display === "") {
            solution.style.display = "block";
            button.textContent = "Hide Execution";
        } else {
            solution.style.display = "none";
            button.textContent = "Show Execution";
        }
    });
}

toggleSolution("showExecutionButton-1", ".execution-1");
toggleSolution("showExecutionButton-2", ".execution-2");

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

