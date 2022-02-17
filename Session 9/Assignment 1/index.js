function age() {
    let age = document.getElementById("age").value
    // console.log(age);
    if (age > 18) {
        document.getElementById("age-check").innerHTML =
          "You can drive in India!";
    } else if (age < 18) {
        document.getElementById("age-check").innerHTML =
          "You can't drive in India";
    } else {
        document.getElementById("age-check").innerHTML = "You are just old enough to drive in India!"
    }
}