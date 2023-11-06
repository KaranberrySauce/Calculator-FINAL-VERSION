const display1El = document.querySelector(".display-1");
const display2El = document.querySelector(".display-2");
const displayTemp = document.querySelector(".temp-result");

const numbersElement = document.querySelectorAll(".number");
const operationElement = document.querySelectorAll(".operation");
const equalElement = document.querySelector(".equal");
const clearAllElement = document.querySelector(".all-clear");
const clearLastElement = document.querySelector(".last-entity-clear");

let dis1Num = "";
let dis2Num = "";
let result = null;
let lastOperation = "";
let haveDot = false;

numbersElement.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (e.target.innerText === "." && !haveDot) {
      haveDot = true;
    } else if (e.target.innerText === "." && haveDot) {
      return;
    }
    dis2Num += e.target.innerText;
    display2El.innerText = dis2Num;
  });
});

operationElement.forEach((operation) => {
  operation.addEventListener("click", (e) => {
    if (!dis2Num) return;
    haveDot = false;
    const operationName = e.target.innerText;
    if (dis1Num && dis2Num && lastOperation) {
      mathOperation();
    } else {
      result = parseFloat(dis2Num);
    }
    clearVar(operationName);
    lastOperation = operationName;
    console.log(result);
  });
});

function clearVar(name = "") {
  dis1Num += dis2Num + " " + name + " ";
  display1El.innerText = dis1Num;
  display2El.innerText = "";
  dis2Num = "";
  displayTemp.innerText = result;
}

function mathOperation() {
  if (lastOperation === "X") {
    result = parseFloat(result) * parseFloat(dis2Num);
  } else if (lastOperation === "/") {
    result = parseFloat(result) / parseFloat(dis2Num);
  } else if (lastOperation === "+") {
    result = parseFloat(result) + parseFloat(dis2Num);
  } else if (lastOperation === "-") {
    result = parseFloat(result) - parseFloat(dis2Num);
  } else if (lastOperation === "%") {
    result = parseFloat(result) % parseFloat(dis2Num);
  }
}

equalElement.addEventListener("click", (e) => {
  if (!dis1Num || !dis2Num) return;
  haveDot = false;
  mathOperation();
  clearVar();
  display2El.innerText = result;
  displayTemp.innerText = "";
  dis2Num = result;
  dis1Num = "";
});

clearAllElement.addEventListener("click", (e) => {
  display1El.innerText = "0";
  display2El.innerText = "0";
  displayTemp.innerText = "0";
  dis1Num = "";
  dis2Num = "";
  result = "";
});

clearLastElement.addEventListener("click", (e) => {
  display2El.innerText = "";
  dis2Num = "";
});

window.addEventListener("keydown", (e) => {
  if (
    e.key === "0" ||
    e.key === "1" ||
    e.key === "2" ||
    e.key === "3" ||
    e.key === "4" ||
    e.key === "5" ||
    e.key === "6" ||
    e.key === "7" ||
    e.key === "8" ||
    e.key === "9" ||
    e.key === "."
  ) {
    clickButtonElement(e.key);
  }
});

function clickButtonElement(key){
    numbersElement.forEach(button => {
        if(button.innerText === key) {
            button.click();
        }
    })
}