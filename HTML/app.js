// Global Variables
let total = 0;
let quantity = 0;
let size = "S";
let productPrice = 69;
let productColor = "purple";
let imageUrl = "Images/2.jpg";
let cartTotal = 0;
let totalPrice = 0;
const cart = [];

const closeModalBtn = document.querySelector(".close");
const totalItem = document.querySelector(".total-item");
const sizeBoxes = document.querySelectorAll(".size-box");
const circles = document.querySelectorAll(".color-circle");
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const quantityDisplay = document.getElementById("quantity");
const addToCart = document.querySelector(".add-to-cart");
const modalWindow = document.querySelector(".modal-content");
const contShopBtn = document.querySelector(".cont-shop");
const openModalBtn = document.querySelector("#openModal");
const floatingButton = document.querySelector(".floating-button");
const modal = document.querySelector("#myModal");

function setActiveCircle(circle, index) {
  const imageElement = document.querySelector(".pic-box img");
  const colors = ["Purple", "Cyan", "Blue", "Black"];
  const images = [
    "Images/2.jpg",
    "Images/1.jpg",
    "Images/3.jpg",
    "Images/4.jpg",
  ];

  circles.forEach((c) => {
    c.classList.remove("active");
    c.style.setProperty("--border-color", "transparent");
  });

  productColor = colors[index];
  imageUrl = images[index];
  imageElement.src = imageUrl;

  circle.classList.add("active");
  const bgColor = getComputedStyle(circle).backgroundColor;
  circle.style.setProperty("--border-color", bgColor);
}

function updateSizeAndPrice(index) {
  const sizes = ["S", "M", "L", "XL"];
  const prices = [69, 79, 89, 99];

  size = sizes[index];
  productPrice = prices[index];
}

function updateQuantity(change) {
  quantity = Math.max(0, quantity + change);
  total = Math.max(0, total + change);
  quantityDisplay.textContent = quantity;
}

function resetQuantity() {
  quantity = 0;
  total = 0;
  quantityDisplay.textContent = quantity;
}

function addToCartHandler() {
  if (quantity === 0) {
    alert("No product in the cart");
    return;
  }

  floatingButton.classList.remove("hide");
  cart.push({
    totalProduct: total,
    productSize: size,
    price: Number(productPrice) * Number(total),
    color: productColor,
    image: imageUrl,
  });

  cartTotal += total;
  totalPrice = totalPrice + Number(productPrice) * Number(quantity);
  totalItem.textContent = cartTotal;
  resetQuantity();
}

function addCartRows(productArray) {
  const cartTable = document.querySelector(".cart-table");

  productArray.forEach((product) => {
    const cartRow = document.createElement("div");
    cartRow.classList.add("cart-row", "pro-row");

    const cartItem = document.createElement("div");
    cartItem.classList.add("cart-item");

    const cartImg = document.createElement("div");
    cartImg.classList.add("cart-img");

    const img = document.createElement("img");
    img.src = product.image;
    img.alt = "Picture";
    cartImg.appendChild(img);

    const name = document.createElement("div");
    name.textContent = "Classy Modern Smart Watch";

    cartItem.appendChild(cartImg);
    cartItem.appendChild(name);

    const color = document.createElement("div");
    color.classList.add("prop");
    color.textContent = product.color;

    const size = document.createElement("div");
    size.classList.add("prop");
    size.classList.add("ext");
    size.textContent = product.productSize;

    const quantity = document.createElement("div");
    quantity.classList.add("prop");
    quantity.classList.add("ext");
    quantity.textContent = product.totalProduct;

    const price = document.createElement("div");
    price.classList.add("prop-price");
    price.classList.add("ext");
    price.textContent = `$${product.price}.00`;

    cartRow.appendChild(cartItem);
    cartRow.appendChild(color);
    cartRow.appendChild(size);
    cartRow.appendChild(quantity);
    cartRow.appendChild(price);
    cartTable.appendChild(cartRow);
  });
}

function initializeEventListeners() {
  const qunPro = document.querySelector(".total-qnt");
  const totPrice = document.querySelector(".total-price");
  contShopBtn.addEventListener("click", () => {
    modal.classList.add("hide");
    floatingButton.classList.add("hide");
    const proRows = document.querySelectorAll(".cart-row.pro-row");
    proRows.forEach((row) => row.remove());
  });
  openModalBtn.addEventListener("click", () => {
    modal.classList.remove("hide");
    floatingButton.classList.remove("hide");
    addCartRows(cart);
    qunPro.textContent = cartTotal;
    totPrice.textContent = `$${totalPrice}.00`;
  });

  window.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.classList.add("hide");
      floatingButton.classList.add("hide");

      const proRows = document.querySelectorAll(".cart-row.pro-row");
      proRows.forEach((row) => row.remove());
    }
  });

  circles.forEach((circle, index) => {
    circle.addEventListener("click", () => setActiveCircle(circle, index));
  });

  sizeBoxes.forEach((box, index) => {
    box.addEventListener("click", () => {
      sizeBoxes.forEach((b) => b.classList.remove("selected"));
      box.classList.add("selected");
      updateSizeAndPrice(index);
    });
  });

  decreaseBtn.addEventListener("click", () => updateQuantity(-1));
  increaseBtn.addEventListener("click", () => updateQuantity(1));

  addToCart.addEventListener("click", addToCartHandler);
}

function initializeApp() {
  if (circles.length > 0) {
    setActiveCircle(circles[0], 0);
  }
  initializeEventListeners();
}

document.addEventListener("DOMContentLoaded", initializeApp);
