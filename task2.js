const num1El = document.getElementById("num1");
const num2El = document.getElementById("num2");
const opEl = document.getElementById("operator");
const resultEl = document.getElementById("result");
const calcBtn = document.getElementById("calculate");
const resetBtn = document.getElementById("reset");

    calcBtn.addEventListener("click", () => {
      const a = parseFloat(num1El.value);
      const b = parseFloat(num2El.value);
      const op = opEl.value;

      if (isNaN(a) || isNaN(b)) {
        resultEl.textContent = "Biror raqam kiritilmagan!";
        resultEl.style.color = "red";
        return;
      }

      let res;
      switch (op) {
        case "+": res = a + b; break;
        case "-": res = a - b; break;
        case "*": res = a * b; break;
        case "/":
          if (b === 0) {
            resultEl.textContent = "nol (0) ga bo'lib bo'lmaydi!";
            resultEl.style.color = "red";
            return;
          }
          res = a / b;
          break;
      }

      resultEl.textContent = res;
      resultEl.style.color = "green";
    });

    resetBtn.addEventListener("click", () => {
      num1El.value = "";
      num2El.value = "";
      opEl.value = "choose";
      resultEl.textContent = "";
    });