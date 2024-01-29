let number = "";

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
