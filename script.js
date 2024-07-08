const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("#number");
const btn = document.querySelectorAll("button");
const equalBtn = document.querySelector("#equal");
let input = "";

function separate(equation){
    let equationArr = equation.split(/([-\+\*\/])/g);
    return equationArr;
}

function operate(arr){
    let num1 = parseInt(arr[0]);
    let operator = arr[1];
    let num2 = parseInt(arr[2]);

    if(operator == "+"){
        return num1+num2;
    }
}

numberButtons.forEach((button) => {
    button.addEventListener("click", () => {
        display.textContent += button.textContent;
    })
});

btn.forEach((button)=> {
    button.addEventListener("click", ()=>{
        if(button.textContent != "=") input += button.textContent;
        console.log(input);
    })
});

equalBtn.addEventListener("click", () =>{
    console.log(operate(separate(input)));
});


