function appendToText(value) {
    document.getElementById("text").value += value;
}

function clearText() {
    document.getElementById("text").value = "";
}

function calculateResult() {
    const text = document.getElementById("text");
    try {
        text.value = eval(text.value);
    } catch (error) {
        display.value = "Syntax Error";
    }
}

function mathSqrtText() {
    const value = parseFloat(document.getElementById("text").value);
    document.getElementById("text").value = Math.sqrt(value);
}

function percentageText() {
    const value = parseFloat(document.getElementById("text").value);
    document.getElementById("text").value = value / 100;
}

document.addEventListener("keydown", function (event) {
    const key = event.key;
    const text = document.getElementById("text");

    if (!isNaN(key) || key == ".") {
        appendToText(key);

    } else if (key === "+" || key === "-" || key === "*" || key === "/") {
        appendToText(key);
    } else if (key === "Enter") {
        calculateResult();
    } else if (key === "Backspace") {
        text.value = text.value.slice(0, -1);
    } else if (key === "Escape") {
        clearText();
    }

});