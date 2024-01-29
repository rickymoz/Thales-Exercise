let number = "";

document.body.addEventListener("keydown", (e) => {
  const key = e.key;

  if (key === "Enter") {
    document.getElementById("display").value = eval(number);
    number = "";
  } else if ((e.metaKey || e.ctrlKey) && key === "Backspace") {
    number = "";
    document.getElementById("display").value = number;
  } else if (key === "Backspace") {
    number = number.slice(0, -1);
    document.getElementById("display").value = number;
  } else if (isNumeric(key) || key === "." || isOperator(key)) {
    number += key;
    document.getElementById("display").value = number;
  }
});

function isNumeric(value) {
  return /^\d+$/.test(value);
}

function isOperator(value) {
  return ["+", "-", "*", "/"].includes(value);
}

document.getElementById("calculatorBtns").addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    const clickedNumber = e.target.innerText;
    if (clickedNumber != "=") {
      if (clickedNumber != "C") {
        number += clickedNumber;
        document.getElementById("display").value = number;
      }
    } else {
      document.getElementById("display").value = eval(number);
      number = "";
    }
  }
});

document.getElementById("clearBtn").addEventListener("click", (e) => {
  number = "";
  document.getElementById("display").value = number;
});
