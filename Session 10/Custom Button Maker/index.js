function button() {
    let background = document.getElementById("background").value
    console.log(background);
    let fontcolor = document.getElementById("fontcolor").value
    console.log(fontcolor);
    let fontsize = document.getElementById("fontsize").value;
    console.log(fontsize);
    let fontweight = document.getElementById("fontweight").value
    console.log(fontweight);
    let padding = document.getElementById("padding").value
    console.log(padding);
    let borderRadius = document.getElementById("border-radius").value
    console.log(borderRadius);


    let button = document.createElement("button")
    button.innerHTML = "Custom Button"
    button.className = "new-button"
    document.querySelector(".outer-div").append(button)

    button.style.backgroundColor = background
    button.style.color = fontcolor
    button.style.fontSize = fontsize
    button.style.fontWeight = fontweight
    button.style.padding = padding
    button.style.borderRadius = borderRadius
}