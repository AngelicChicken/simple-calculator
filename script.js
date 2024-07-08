const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("#number");

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })
})

