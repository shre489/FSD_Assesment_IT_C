const pricePerUnit = 15;

// total price
function updateTotalPrice() {
    const quantity = document.getElementById("quantity").value;
    const totalPrice = pricePerUnit * quantity;
    document.getElementById("totalPrice").innerText = "Rs. " + totalPrice;
