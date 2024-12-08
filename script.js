<script>
// Handle login and sign-up actions
document.getElementById("loginForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Login successful!");
  window.location.href = "home.html"; // Redirect to home page after login
});

document.getElementById("signupForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Sign up successful!");
  window.location.href = "login.html"; // Redirect to login page after sign up
});

// Handle adding products to cart
let cart = JSON.parse(localStorage.getItem("cart")) || []; // Retrieve cart from localStorage

function addToCart(productName, productImage, productPrice) {
  const product = {
    name: productName,
    image: productImage,
    price: productPrice
  };

  // Add the product to the cart array
  cart.push(product);

  // Store updated cart in localStorage
  localStorage.setItem("cart", JSON.stringify(cart));

  // Alert the user and update the cart display
  alert(`${productName} added to cart.`);
  updateCart();
}

// Function to update the cart display
function updateCart() {
  const cartItemsContainer = document.getElementById("cart-items");
  const cartTotal = document.getElementById("cart-total");

  // Clear current cart display
  cartItemsContainer.innerHTML = "";

  let total = 0;
  
  // Display each item in the cart
  cart.forEach((product, index) => {
    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    cartItem.innerHTML = `
      <img src="${product.image}" alt="${product.name}" class="cart-item-image">
      <div class="cart-item-info">
        <h4>${product.name}</h4>
        <p>₱${product.price.toFixed(2)}</p>
      </div>
    `;

    cartItemsContainer.appendChild(cartItem);
    total += product.price;
  });

  // Update the total price in the cart
  cartTotal.textContent = `Total: ₱${total.toFixed(2)}`;
}

// Display cart items on page load
window.onload = function () {
  updateCart(); // Update cart when page loads
};

// Handle checkout form submission
document.getElementById("checkoutForm").addEventListener("submit", function (event) {
  event.preventDefault();
  alert("Order placed successfully!");
  localStorage.removeItem("cart"); // Clear cart after checkout
  window.location.href = "home.html"; // Redirect to home page
});

// Logout action
document.getElementById("logoutBtn").addEventListener("click", function () {
  localStorage.removeItem("cart"); // Clear cart on logout
});
</script>
