const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const resetButtons = document.querySelector("#reset");
const percentButtons = document.querySelector("#percent");
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
    } if(operator == "-"){
        return num1-num2;
    } if(operator == "*"){
        return num1*num2;
    } if(operator == "/"){
        return num1/num2;
    }
}

function percent(num){
    num = parseInt(num)/100;
    return num;
}

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(input.includes('+')||input.includes('-')||input.includes('*')||input.includes('/')){
            display.textContent = operate(separate(input));
            input = display.textContent;
        }
    })
});

btn.forEach((button)=> {
    button.addEventListener("click", ()=>{
        if(button.textContent != "=" ||button.textContent != "%"){
            input += button.textContent;
            display.textContent += button.textContent;
        }
    })
});

equalBtn.addEventListener("click", () =>{
    display.textContent = operate(separate(input));
});

resetButtons.addEventListener("click", () => {
    display.textContent = '';
    input = '';
});

percentButtons.addEventListener("click", () => {
    display.textContent = percent(input);
    input = percent(input);
})


