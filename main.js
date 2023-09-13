window.addEventListener("scroll", function(){
    let header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
});


let menu = document.querySelector(".menu");
let menuBtn = document.querySelector(".menu-btn");
let closeBtn = document.querySelector(".close-btn");

menuBtn.addEventListener("click", () => {
    menu.classList.add('active');
});

closeBtn.addEventListener("click", () => {
    menu.classList.remove('active');
});

const menuContainer = document.getElementById("menu-container");
const orderButtons = document.querySelectorAll(".order-button");
const cartItemsList = document.getElementById("cart-items");
const totalPriceText = document.getElementById("total-price");
const cart = [];

orderButtons.forEach((button) => {
    button.addEventListener("click", (event) => {
        const itemName = event.target.getAttribute("data-name");
        const itemPrice = parseFloat(event.target.getAttribute("data-price"));

        
        cart.push({ name: itemName, price: itemPrice });

        
        updateCartDisplay();

        
        alert(`${itemName} has been added to your cart.`);
    });
});

function updateCartDisplay() {
    cartItemsList.innerHTML = "";
    let total = 0;

    cart.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsList.appendChild(li);
        total += item.price;
    });

    totalPriceText.textContent = `Total: $${total.toFixed(2)}`;
}