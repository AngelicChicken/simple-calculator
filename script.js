const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator")
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

// numberButtons.forEach((button) => {
//     button.addEventListener("click", () => {
        
//     })
// });

operatorButtons.forEach((button) => {
    button.addEventListener("click" () => {

    })
});

btn.forEach((button)=> {
    button.addEventListener("click", ()=>{
        if(button.textContent != "="){
            input += button.textContent;
            display.textContent += button.textContent;
        } 
        console.log(input);
    })
});

equalBtn.addEventListener("click", () =>{
    display.textContent = operate(separate(input));
});


