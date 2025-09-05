const input = document.querySelector("#counter");
const minusEl = document.querySelector("#minus");
const plusEl = document.querySelector("#plus");
const freshEl = document.querySelector("#fresh");
const spanEl = document.createElement("span");

    spanEl.textContent = "0";

    let count = 0;
    input.value = spanEl.textContent; 

    function updateCounter(color = "black") {
      spanEl.textContent = count;
      input.value = spanEl.textContent; 
      input.style.color = color;
    }

    minusEl.addEventListener("click", () => {
      count--;
      updateCounter("red");
    });

    plusEl.addEventListener("click", () => {
      count++;
      updateCounter("green");
    });

    freshEl.addEventListener("click", () => {
      count = 0;
      updateCounter("black");
    });