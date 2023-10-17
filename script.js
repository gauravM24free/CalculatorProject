document.addEventListener("DOMContentLoaded", function () {
    const result = document.getElementById("result");
    const buttons = document.querySelectorAll(".buttons button");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            if (button.textContent === "=") {
                try {
                    result.value = eval(result.value);
                } catch (error) {
                    result.value = "Error";
                }
            } else if (button.textContent === "C") {
                result.value = "";
            } else {
                result.value += button.textContent;
            }
        });
    });
});
