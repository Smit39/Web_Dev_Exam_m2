let stringCont = document.getElementById("str-var");
let intCont = document.getElementById("int-var");
let sumFuncAns = document.getElementById("sum-func-answer");
let if_elseAns = document.getElementById("if-else-header-answer");

let stringVar = "Smit";
stringCont.innerHTML = stringVar;
let integerVar = 8;
intCont.innerHTML = integerVar;

let sumFunc = (num1, num2) => {
    return num1 + num2;
};

sumFuncAns.innerHTML = sumFunc(3, 4);


let age = 19;
if (age >= 21) {
    if_elseAns.innerHTML = "Yes!";
} else {
    if_elseAns.innerHTML = "No!";
}


for (let i = 1; i < 11; i++) {
    document.write(i * 2 + "<br>");
}