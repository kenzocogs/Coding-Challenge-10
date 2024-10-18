// Task 2: Add Event Listeners for Product Selection

// Turning HTML ids into JS variables
let sizeSelector = document.getElementById("size-selector");
let priceElement = document.getElementById("product-price");

// event listener for dynamic change
sizeSelector.addEventListener("change", (event) => {
let selectedPrice = event.target.value;
priceElement.textContent = `$${selectedPrice}`;
});
