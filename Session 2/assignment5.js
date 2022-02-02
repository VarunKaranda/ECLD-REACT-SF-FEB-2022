//Assignment 5
//Based on the state print the region it belongs to "EAST", "WEST", "NORTH", "SOUTH"

let state = "goa";

if (
  state === "Kerala" ||
  state === "Tamil Nadu" ||
  state === "Karnataka" ||
  state === "Andhra Pradesh" ||
  state === "Telangana"
) {
  console.log(`${state} belongs to SOUTH`);
} else if (
  state === "Bihar" ||
  state === "Jharkhand" ||
  state === "West Bengal" ||
  state === "Sikkim" ||
  state === "Assam" ||
  state === "Arunachal Pradesh" ||
  state === "Meghalaya" ||
  state === "Nagaland" ||
  state === "Manipur" ||
  state === "Tripura" ||
  state === "Mizoram"
) {
  console.log(`${state} belongs to WEST`);
} else if (
  state === "Jammu Kashmir" ||
  state === "Himachal Pradesh" ||
  state === "Punjab" ||
  state === "Hariyana" ||
  state === "Uttarakhand" ||
  state === "Uttar Pradesh" ||
  state === "Madhya Pradesh" ||
  state === "Chattisgarh"
) {
  console.log(`${state} belongs to NORTH`);
} else if (
  state === "Rajasthan" ||
  state === "Gujarat" ||
  state === "Maharashtra" ||
  state === "Goa"
) {
  console.log(`${state} belongs to EAST`);
} else {
  console.log("Invalid");
}
