const num1 = document.getElementById("num1");
const num2 = document.getElementById("num2");
const play1 = document.getElementById("play1");
const play2 = document.getElementById("play2");
const reset = document.getElementById("reset");
const select = document.getElementById("select");
const border = document.getElementById("border");

select.addEventListener("click", () => {
  let n1 = 0;
  let n2 = 0;

  if (select.value == 0) {
    play1.disabled = true;
    play2.disabled = true;
  } else if (select.value > 0) {
    console.log(select.value);
    play1.removeAttribute("disabled");
    play2.removeAttribute("disabled");
  }

  play1.addEventListener("click", () => {
    n1++;
    num1.textContent = n1;
    if (select.value == n1) {
      num1.classList.remove("text-dark");
      num1.classList.add("text-success");
      num1.classList.remove("text-danger");
      num2.classList.remove("text-dark");
      num2.classList.remove("text-success");
      num2.classList.add("text-danger");
      play1.disabled = true;
      play2.disabled = true;
      border.classList.add("shadowlg");
    }

    select.addEventListener("click", () => {
      n1 = 0;
      n2 = 0;
      num1.classList.add("text-dark");
      num2.classList.add("text-dark");
      num1.textContent = n1;
      border.classList.remove("shadowlg");
    });
  });

  play2.addEventListener("click", () => {
    n2++;
    num2.textContent = n2;
    if (select.value == n2) {
      num2.classList.remove("text-dark");
      num2.classList.add("text-success");
      num2.classList.remove("text-danger");
      num1.classList.remove("text-dark");
      num1.classList.remove("text-success");
      num1.classList.add("text-danger");
      border.classList.add("shadowlg");

      play1.disabled = true;
      play2.disabled = true;
    }

    select.addEventListener("click", () => {
      n1 = 0;
      n2 = 0;
      num1.classList.add("text-dark");
      num2.classList.add("text-dark");
      num2.textContent = n2;
    });
  });

  reset.addEventListener("click", () => {
    n1 = 0;
    n2 = 0;
    select.value = 0;
    border.classList.remove("shadowlg");
    num1.textContent = n1;
    num2.textContent = n2;
    num1.classList.add("text-dark");
    num1.classList.remove("text-success");
    num1.classList.remove("text-danger");
    num2.classList.add("text-dark");
    num2.classList.remove("text-success");
    num2.classList.remove("text-danger");
  });
});
