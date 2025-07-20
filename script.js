let cart = [];
let total = 0;

function addToCart(item, price) {
  cart.push({ item, price });
  total += price;
  updateCart();
}

function removeFromCart(index) {
  total -= cart[index].price;
  cart.splice(index, 1);
  updateCart();
}

function updateCart() {
  const cartList = document.getElementById("cartItems");
  const totalElement = document.getElementById("total");
  const itemCount = document.getElementById("itemCount");

  cartList.innerHTML = '';
  cart.forEach((product, index) => {
    const li = document.createElement("li");
    li.innerHTML = `${product.item} - ₹${product.price} 
      <span class="remove-btn" onclick="removeFromCart(${index})">🗑️ Remove</span>`;
    cartList.appendChild(li);
  });

  totalElement.textContent = total;
  itemCount.textContent = cart.length;
}

function placeOrder() {
  const name = document.getElementById("customerName").value.trim();
  const phone = document.getElementById("phoneNumber").value.trim();
  const address = document.getElementById("deliveryAddress").value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in your name, phone number, and address.");
    return;
  }

  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  let orderDetails = `🧾 Order Summary for ${name}:\n\n`;
  cart.forEach(product => {
    orderDetails += `${product.item} - ₹${product.price}\n`;
  });
  orderDetails += `\nTotal: ₹${total}`;
  orderDetails += `\nDelivery Address: ${address}`;

  // Simulated phone notification
  alert(`📱 Notification:\nHi ${name}, your order has been placed!\nWe'll deliver to: ${address}\nPhone: ${phone}`);

  // Clear after order
  cart = [];
  total = 0;
  document.getElementById("customerName").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("deliveryAddress").value = "";
  updateCart();
}
