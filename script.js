const display = document.querySelector("#display");
const numberButtons = document.querySelectorAll("#number");
const operatorButtons = document.querySelectorAll("#operator");
const resetButtons = document.querySelector("#reset");
const percentButtons = document.querySelector("#percent");
const minusButton = document.querySelector("#minus");
const comaButton = document.querySelector("#coma");
const inputButtons = document.querySelectorAll(".input");
const btn = document.querySelectorAll("button");
const equalBtn = document.querySelector("#equal");
let input = "";
let displayText = "";

function separate(equation){
    let equationArr = equation.split(/([-\+\*\/])/g);
    return equationArr;
}

function operate(arr){
    if(arr[0].includes("m")){
        arr[0] = arr[0].replace("m", "");
        arr[0] = `-${arr[0]}`
    } if(arr[2].includes("m")){
        arr[2] = arr[2].replace("m", "");
        arr[2] = `-${arr[2]}`
    }
    console.log(arr);

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

//the – use in (–number) is en dash, not -, this is done to simplify the splitting
function minus(arr){
    console.log(arr);
    if(arr.length == 3){
        if(arr[2].includes('m')){
            arr[2] = arr[2].replace("m", "");
            displayText = display.textContent;
            displayText = displayText.split(/([-\+\*\/])/g);
            displayText[2] = displayText[2].replace("(–", "").replace(")", "");
            display.textContent = displayText.join("");
        } else {
            displayText = display.textContent.split(/([-\+\*\/])/g)
            displayText.pop()
            display.textContent = displayText.join("") + `(–${arr[2]})`;
            arr[2] += 'm';
        }
    } else{
        if(arr[0].includes('m')){
            arr[0] = arr[0].replace("m", "");
            display.textContent = display.textContent.replace(`(–${arr[0]})`, arr[0]);
        } else {
            if(arr.length == 2){
                display.textContent = `(–${arr[0]})${arr[1]}`
            } else {
                display.textContent = `(–${arr[0]})`
            }
            arr[0] += 'm';
        }
    }
    return arr.join('');
}

operatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
        if(input.includes('+')||input.includes('-')||input.includes('*')||input.includes('/')){
            display.textContent = operate(separate(input));
            input = display.textContent;
        }
    })
});

inputButtons.forEach((button)=> {
    button.addEventListener("click", ()=>{
        input += button.textContent;
        display.textContent += button.textContent;
    })
});

equalBtn.addEventListener("click", () =>{
    let separated = separate(input);
    display.textContent = operate(separated);
});

resetButtons.addEventListener("click", () => {
    display.textContent = '';
    input = '';
});

percentButtons.addEventListener("click", () => {
    display.textContent = percent(input);
    input = percent(input);
});

minusButton.addEventListener("click", ()=> {
    input = minus(separate(input));
    console.log(input);
})


