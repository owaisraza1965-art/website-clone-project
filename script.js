let cart = JSON.parse(localStorage.getItem("cart")) || [];

function toggleMenu() {
  document.getElementById("navLinks").classList.toggle("show");
}

function scrollToProducts() {
  document.getElementById("products").scrollIntoView({ behavior: "smooth" });
}

function toggleCart() {
  document.getElementById("cart").classList.toggle("show");
}

function addToCart(name, price) {
  cart.push({ name, price });
  localStorage.setItem("cart", JSON.stringify(cart));
  updateCart();
}

function updateCart() {
  let list = document.getElementById("cart-items");
  let total = 0;
  list.innerHTML = "";

  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = item.name + " - $" + item.price;
    list.appendChild(li);
    total += item.price;
  });

  document.getElementById("total").textContent = total;
  document.getElementById("cart-count").textContent = cart.length;
}

function clearCart() {
  cart = [];
  localStorage.removeItem("cart");
  updateCart();
}

function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

updateCart();