document.addEventListener("DOMContentLoaded", () => {
  const productsList = document.querySelector(".products-list");
  const cartList = document.querySelector(".cart-list");
  const emptyCart = document.querySelector(".empty-text");
  const checkout = document.querySelector(".checkout");
  const products = [
    { id: 1, name: "Niagara Fall's Tours", time: "5 hours", price: 79.99 },
    { id: 2, name: "Sain Jhon Tours", time: "3 hours", price: 50.0 },
    { id: 3, name: "Jet Boat Ride ", time: "30 Minutes", price: 39.99 },
  ];

  let cartProducts = [];
  let checkoutPricing = [];

  cartProducts = JSON.parse(localStorage.getItem("localCart")) || [];
  checkoutPricing = JSON.parse(localStorage.getItem("localTotalPrice")) || [];
  if (cartProducts.length === 0) {
    emptyCart.classList.remove("hidden");
    checkout.innerHTML = "";
  } else {
    emptyCart.classList.add("hidden");
  }
  renderCart();

  function showProducts() {
    if (!products || products.length === 0) return;

    products.forEach((product) => {
      const productItem = document.createElement("div");
      productItem.classList.add("product-item");
      productItem.innerHTML = `<span class="product-title">${product.name}</span>
            <span class="price">$${product.price}</span>
            <span class="time">${product.time}</span>
            <button data-id="${product.id}">Book Now</button>`;
      productsList.appendChild(productItem);
    });
  }
  showProducts();

  productsList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const clickedID = parseInt(e.target.getAttribute("data-id"));
      const product = products.find((p) => p.id === clickedID);
      addToCart(product);
    }
  });

  function addToCart(product) {
    emptyCart.classList.add("hidden");
    cartProducts.push(product);
    localStorage.setItem("localCart", JSON.stringify(cartProducts));
    cartProducts = JSON.parse(localStorage.getItem("localCart"));

    // add pricing
    const price = product.price.toFixed(2);
    checkoutPricing.push(price);
    localStorage.setItem("localTotalPrice", JSON.stringify(checkoutPricing));
    checkoutPricing = JSON.parse(localStorage.getItem("localTotalPrice"));

    // render cart
    renderCart();
  }

  function renderCart() {
    cartList.innerHTML = ""; // Clear cart first
    checkout.classList.remove("hidden");
    checkout.innerHTML = "";

    cartProducts.forEach((product, index) => {
      const cartItem = document.createElement("div");
      cartItem.classList.add("cart-item");
      cartItem.innerHTML = `<span class="cart-item-title">${product.name}</span>
            <span class="price">$${product.price}</span>
            <button data-index="${index}">Remove</button>`;
      cartList.appendChild(cartItem);
    });

    let totalPrice = 0;
    for (let index = 0; index < checkoutPricing.length; index++) {
      const price = checkoutPricing[index];
      totalPrice += Number(price);
    }

    checkout.innerHTML = `<span class="totalPrice">$${totalPrice.toFixed(
      2
    )}</span>
        <button class="checkoutBtn">Checkout</button>`;
  }

  cartList.addEventListener("click", (e) => {
    if (e.target.tagName === "BUTTON") {
      const index = parseInt(e.target.dataset.index);
      cartProducts.splice(index, 1);
      checkoutPricing.splice(index, 1);
      localStorage.setItem("localCart", JSON.stringify(cartProducts));
      localStorage.setItem("localTotalPrice", JSON.stringify(checkoutPricing));
      renderCart();

      if (cartProducts.length === 0) {
        emptyCart.classList.remove("hidden");
        checkout.innerHTML = "";
      }
    }
  });
});
