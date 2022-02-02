// Assignment 8
// Given the shirt size code "S", "M", "L", "XL" print the corresponding names "Small", "Medium", "Large", "Extra Large", "None" (For not a valid code)

let size = "XXL";

if (size === "S") {
  console.log("Small");
} else if (size === "M") {
  console.log("Medium");
} else if (size === "L") {
  console.log("Large");
} else if ((size === "XL")) {
  console.log("Extra Large");
} else {
  console.log("None");
}