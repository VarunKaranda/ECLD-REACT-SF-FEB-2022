// Assignment 3
// Given user's names and their phone numbers , query the given user and find the phone number .

let object = [
  { name: "Varun", phone: 1234567890 },
  { name: "Abhijith", phone: 2345678901 },
  { name: "Shyam", phone: 3456789021 },
];
let user = "Shyam"

for (let i = 0; i < object.length; i++){
    if (object[i].name === user) {
        console.log(object[i].phone);
    }
}

 