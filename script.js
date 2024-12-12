document.addEventListener("DOMContentLoaded", () => {
    const input = document.querySelector("#input input");
    const buttons = document.querySelectorAll(".button");

    const display = (value) => {
        if (input.value === "0" || input.value === "Error") {
            input.value = value;
        } else {
            input.value += value;
        }
    };

    const calculate = (expression) => {
        let num1 = "";
        let num2 = "";
        let operator = "";
        let result = 0;

        for (let i = 0; i < expression.length; i++) {
            let char = expression[i];

            if (char >= "0" && char <= "9" || char === ".") {
                if (!operator) {
                    num1 += char;
                } else {
                    num2 += char;
                }
            } else if (char === "+" || char === "-" || char === "*" || char === "/") {
                operator = char;
            }
        }

        num1 = parseFloat(num1);
        num2 = parseFloat(num2);

        if (operator === "+") {
            result = num1 + num2;
        } else if (operator === "-") {
            result = num1 - num2;
        } else if (operator === "*") {
            result = num1 * num2;
        } else if (operator === "/") {
            if (num2 === 0) {
                return "Error";
            }
            result = num1 / num2;
        }

        return result.toString();
    };

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.textContent;

            if (value === "DEL") {
                input.value = input.value.length > 1 ? input.value.slice(0, -1) : "0";
            } else if (value === "RESET") {
                input.value = "0";
            } else if (value === "=") {
                input.value = calculate(input.value);
            } else {
                display(value);
            }
        });
    });
});
