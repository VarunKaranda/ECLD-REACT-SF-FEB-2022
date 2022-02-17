function redLight() {
  let signal1 = document.getElementById("red").value;
  if (signal1 === "Stop") {
    document.getElementById("red-light").style.backgroundColor = "Red";
    document.getElementById("yellow-light").style.backgroundColor = "Black";
    document.getElementById("green-light").style.backgroundColor = "Black";
  }
}

function yellowLight() {
  let signal2 = document.getElementById("yellow").value;
  if (signal2 === "Ready") {
    document.getElementById("red-light").style.backgroundColor = "Black";
    document.getElementById("yellow-light").style.backgroundColor = "Yellow";
    document.getElementById("green-light").style.backgroundColor = "Black";
  }
}

function greenLight() {
  let signal3 = document.getElementById("green").value;
  if (signal3 === "Go") {
    document.getElementById("red-light").style.backgroundColor = "Black";
    document.getElementById("yellow-light").style.backgroundColor = "Black";
    document.getElementById("green-light").style.backgroundColor = "Green";
  }
}
