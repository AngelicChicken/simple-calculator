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

    let num1 = parseFloat(arr[0]);
    let operator = arr[1];
    let num2 = parseFloat(arr[2]);

    if(operator == "+"){
        return num1+num2;
    } if(operator == "-"){
        return num1-num2;
    } if(operator == "*"){
        return num1*num2;
    } if(operator == "/"){
        if(num2 != 0){
            return num1/num2;
        }else {
            alert("Dont divide by 0");
        }
    }
}

function percent(num){
    if(num.includes("m")){
        num = num.replace("m", "");
        numForDisplay = `(–)${parseFloat(num)/100}`
        num = `${parseFloat(num)/100}m`;
        return [num, numForDisplay]; 
    } else{
        num = parseFloat(num)/100;
        return [num, num];
    }
}

//the – use in (–number) is en dash, not -, this is done to simplify the splitting
function minus(arr){
    if(arr.length == 3){
        if(arr[2].includes('m')){
            arr[2] = arr[2].replace("m", "");
            displayText = display.textContent;
            displayText = displayText.split(/([-\+\*\/])/g);
            displayText[2] = displayText[2].replace("(–)", "");
            display.textContent = displayText.join("");
        } else {
            displayText = display.textContent.split(/([-\+\*\/])/g);
            displayText.pop();
            display.textContent = displayText.join("") + `(–)${arr[2]}`;
            arr[2] += 'm';
        }
    } else{
        if(arr[0].includes('m')){
            arr[0] = arr[0].replace("m", "");
            display.textContent = display.textContent.replace(`(–)${arr[0]}`, arr[0]);
        } else {
            if(arr.length == 2){
                display.textContent = `(–)${arr[0]}${arr[1]}`
            } else {
                display.textContent = `(–)${arr[0]}`
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
    // let inputArr = separate(input);
    // if(inputArr.length == 3){
    //     inputPercent = percent(inputArr[2]);
    //     input = input.split(/([-\+\*\/])/g);
    //     input.pop()
    //     input = input.join("") + inputPercent[0];
    //     console.log(`input = ${input}, inputArr = ${inputArr}, inputPercent = ${inputPercent}`);
    //     displayText = display.textContent;
    //     displayText = display.textContent.split(/([-\+\*\/])/g);
    //     displayText.pop();
    //     display.textContent = displayText.join("") + inputPercent[1];
    // } else {console.log("percent")}
    alert("implement later")
});

minusButton.addEventListener("click", ()=> {
    input = minus(separate(input));
    console.log(input);
});

comaButton.addEventListener("click", () =>{
    console.log("coma button press");
    let inputSeparate = separate(input);
    console.log(inputSeparate)
    if(inputSeparate.length == 3){
        if(!inputSeparate[2].includes(".")){
            input += ".";
            display.textContent += "."
        }
    } else {
        if(!input.includes(".")){
            input += "."
            display.textContent += "."
        }
    }
})


