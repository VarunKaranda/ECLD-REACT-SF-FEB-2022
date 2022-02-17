function tip() {
  let billAmount = Number(document.getElementById("amount").value);
  console.log(billAmount);
  let tip = Number(document.getElementById("tip").value);
    console.log(tip);
    if (!billAmount || !tip) {
        document.getElementById("para").innerHTML = "Enter the necessary fields"
    } else {
        let tipAmount = (billAmount * tip) / 100;
        console.log(tipAmount);
        document.getElementById("tipamount").value = tipAmount;
        let totalAmount = billAmount + tipAmount;
        console.log(totalAmount);
        document.getElementById("totalamount").value = totalAmount;
    }
    
    
}

