function plus() {
  let action = document.getElementById("plus").value;
  if (action === "+") {
    let image = document.getElementById("img");
    let currentWidth = image.clientWidth;
    let newWidth = currentWidth + 5 + "px";
    image.style.width = newWidth
    document.getElementById("para").innerHTML = `Width: ${newWidth}`
    // console.log("Plus");
  }
}
function minus() {
    let action = document.getElementById("minus").value;
    if (action === "-") {
        let image = document.getElementById("img");
      let currentWidth = image.clientWidth;
      let newWidth = currentWidth - 5 + "px"
      image.style.width = newWidth
      document.getElementById("para").innerHTML = `Width: ${newWidth}`;
        // console.log("Plus");
    }
}
