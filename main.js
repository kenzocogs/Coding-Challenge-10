// Task 2: Add Event Listeners for Product Selection

// Turning HTML ids into JS variables
let sizeSelector = document.getElementById("size-selector");
let priceElement = document.getElementById("product-price");

// event listener for dynamic change
sizeSelector.addEventListener("change", function(event) {
let selectedPrice = event.target.value;
priceElement.textContent = `$${selectedPrice}`;
});

// Task 3: Handle Stock Availability 
let availability = document.getElementById("stock")
let purchaseButton = document.getElementById("button")

//initializing product array
let stock = {
    small: { price: 85, quantity: 43},
    medium: { price: 110, quantity: 0}, // sold out
    large: { price: 130, quantity: 19},
    extralarge: { price: 160, quantity: 0}, // sold out
}

sizeSelector.addEventListener("change", function(event) {
let selectedSize = event.target.value
let selectedStock = stock[selectedSize] 
priceElement.textContent = `$${selectedStock.price}`;

if (selectedStock.quantity > 0) { // checking if product size is sold out or not 
    availability.textContent = "In Stock"
    purchaseButton.disabled = false;
} else {
    availability.textContent = "Out of Stock";
    purchaseButton.disabled = true
}
}); // purchase button should be disabled for the medium and extra large sizes
