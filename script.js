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

document.getElementById("showExecutionButton").addEventListener("click", function () {
    const solution = document.querySelector(".execution");
    if (solution.style.display === "none") {
        solution.style.display = "block";
        document.getElementById("showExecutionButton").textContent = "Hide Execution";
    } else {
        solution.style.display = "none";
        document.getElementById("showExecutionButton").textContent = "Show Execution";
    }
});

