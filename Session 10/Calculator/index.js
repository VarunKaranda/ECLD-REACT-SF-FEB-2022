let screen = document.querySelector("input");
function onScreen(value) {
  screen.value += value;
}

function clearScreen() {
  screen.value = "";
}
function calculate() {
    screen.value = eval(screen.value); 
}
function square() {
    screen.value = screen.value * screen.value; 
}
function backSpace() {
    screen.value = screen.value.slice(0, -1); 
}
