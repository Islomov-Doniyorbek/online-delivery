const picts = [
    "./burger.jpg",
    "./donar.jpg",
    "./lavash.jpg",
    "./shaurma.jpg",
    "./sendvich.jpg",
    "./pitsa.jpg",
    "./osh.jpg",
    "./somsa.jpg",
    "./halim.jpg",
    "./kabob.jpg",
    "./xonim.jpg",
]
const taomlar = [
    "Gamburger",
    "Donar",
    "Lavash",
    "Shaurma",
    "Sendvich",
    "Pitsa",
    "Osh",
    "Somsa",
    "Halim",
    "Kabob",
    "Xonim",
]
const narxlar = [
    "25000",
    "34000",
    "32000",
    "28000",
    "30000",
    "45000",
    "27000",
    "7000",
    "30000",
    "14000",
    "8000",
]


function addCards() {
    let productGrid = document.querySelector(".product-grid");

    for (let i = 0; i < picts.length; i++) {
        productGrid.innerHTML += `
        <div class="product-card">
                <div class="img"><img src="${picts[i]}" alt="${taomlar[i]}"></div>
                <div class="details">
                    <h3>${taomlar[i]}</h3>
                    <p>Mazali taomlardan bahramand bo'ling!</p>
                    <div class="price">${narxlar[i]} so'm</div>
                    <button onclick="addToCart('${taomlar[i]}', ${narxlar[i]})">Qo'shish</button>
                </div>
         </div>
        `
    }
}
addCards()
const cart = [];

        function addToCart(productName, productPrice) {
            cart.push({ name: productName, price: productPrice });
            updateCart();
        }

        function updateCart() {
            const cartItems = document.getElementById('cart-items');
            const cartTotal = document.getElementById('cart-total');
            cartItems.innerHTML = '';

            let total = 0;
            cart.forEach((item, index) => {
                const li = document.createElement('li');
                li.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">O'chirish</button>`;
                cartItems.appendChild(li);
                total += item.price;
            });

            cartTotal.textContent = total.toFixed(2);
        }

        function removeFromCart(index) {
            cart.splice(index, 1);
            updateCart();
        }

        function goToCheckout() {
            if (cart.length === 0) {
                alert('Savat bo\'sh');
            } else {
                localStorage.setItem('cart', JSON.stringify(cart));
                window.location.href = 'checkout.html';
            }
        }