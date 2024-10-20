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

//initializing product object
let stock = {
    small: { price: 85, quantity: 43},
    medium: { price: 110, quantity: 0}, // sold out
    large: { price: 130, quantity: 19},
    extralarge: { price: 160, quantity: 0}, // sold out
}

sizeSelector.addEventListener("change", function(event) {
let selectedSize = event.target.value
let selectedStock = stock[selectedSize] // connecting the stock object with the dropdown menu in the html page 
priceElement.textContent = `$${selectedStock.price}`;

if (selectedStock.quantity > 0) { // checking if product size is sold out or not 
    availability.textContent = "In Stock"
    purchaseButton.disabled = false;
} else {
    availability.textContent = "Out of Stock";
    purchaseButton.disabled = true
}
}); // purchase button should be disabled for the medium and extra large sizes

// Task 4: Create a Checkout Event

purchaseButton.addEventListener("click", function () {
    let selectedSize = sizeSelector.value
    let selectedStock = stock[selectedSize]

    if (selectedStock.quantity > 0) {
        selectedStock--; // subtracting purchase from quantity of stock
        alert(`Your purchase was successful! Thank you for your patronage.`) //showing proper msgs 
    } else {
        alert(`Product cannot be purchased. We are sorry for the inconvenience`)
    }
})

//NOTE: Time does not permit me to complete task 5, so it was skipped. Hopefully completing it was actually optional...