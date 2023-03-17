//Var declaration
let counter = 0;
const buttons = document.querySelectorAll(".btn");
const value = document.getElementById("currentNumber");

// Functions
function changeCounter(pointerEvent) {
  const styles = pointerEvent.currentTarget.classList;
  if (styles.contains("decrease")) {
    counter--;
  } else if (styles.contains("increase")) {
    counter++;
  } else {
    counter = 0;
  }
  changeCounterColor();
  value.innerText = counter;
}

function changeCounterColor() {
  if (counter > 0) {
    value.style.color = "green";
  } else if (counter < 0) {
    value.style.color = " red";
  } else {
    value.style.color = "black";
  }
}

//Event Listeners
buttons.forEach((btn) => {
  btn.addEventListener("click", changeCounter);
});

value.innerText = counter;
