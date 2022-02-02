// Assignment 4
// Give a string of PIN Code (with all digits) print "VALID" or "INVALID" (a PIN code is only valid if it has 6 digits)

let pincode = 6703099;
let pinString = pincode.toString()

if (pinString.length === 6) {
  console.log("VALID");
}
else {
  console.log("INVALID");
}
