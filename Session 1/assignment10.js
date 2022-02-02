//ASSIGNMENT 10
//Given the item prices and quantity along with tax, discount and tip calculator the total bill amount

let priceOfProduct1 = 89;
let quantityOfProduct1 = 3;
let priceOfProduct2 = 100;
let quantityOfProduct2 = 5;
let priceOfProduct3 = 37;
let quantityOfProduct3 = 9;
let taxPercentage = 12;
let discountPercentage = 20;
let tipPercentage = 5;

let grossTotal =
  priceOfProduct1 * quantityOfProduct1 +
  priceOfProduct2 * quantityOfProduct2 +
  priceOfProduct3 * quantityOfProduct3;

let netTotal =
  grossTotal *
  [(100 + taxPercentage) / 100] *
  [(100 - discountPercentage) / 100] *
  [(100 + tipPercentage) / 100];

console.log(`Gross Total : ${grossTotal}`);
console.log(`Net total : ${netTotal}`);
