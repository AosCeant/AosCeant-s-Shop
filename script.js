const productsData = [
    { id: 1, name: 'Ürün 1', price: 50, image: 'product1.jpg' },
    { id: 2, name: 'Ürün 2', price: 25, image: 'product2.jpg' },
    { id: 3, name: 'Ürün 3', price: 40, image: 'product3.jpg' },
    { id: 4, name: 'Ürün 4', price: 60, image: 'product4.jpg' },
    { id: 5, name: 'Ürün 5', price: 50, image: 'product5.jpg' },
    { id: 6, name: 'Ürün 6', price: 25, image: 'product6.jpg' },
    { id: 7, name: 'Ürün 7', price: 40, image: 'product7.jpg' },
    { id: 8, name: 'Ürün 8', price: 60, image: 'product8.jpg' },
    { id: 9, name: 'Ürün 9', price: 150, image: 'product8.jpg' },
    { id: 10, name: 'Ürün 10', price: 125, image: 'product8.jpg' },
    { id: 11, name: 'Ürün 11', price: 140, image: 'product8.jpg' },
    { id: 12, name: 'Ürün 12', price: 80, image: 'product8.jpg' },
    { id: 13, name: 'Ürün 13', price: 50, image: 'product8.jpg' },
    { id: 14, name: 'Ürün 14', price: 125, image: 'product8.jpg' },
    { id: 15, name: 'Ürün 15', price: 60, image: 'product8.jpg' },
    { id: 16, name: 'Ürün 1', price: 70, image: 'product8.jpg' },

    
];
const cartItems = [];

function addToCart(productId) {
    const selectedProduct = productsData.find(product => product.id === productId);
    cartItems.push(selectedProduct);
    updateCart();
}

function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    openCart();
}

function openCart() {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = 'block';
}

function closeCart() {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = 'none';
}

window.onload = renderProducts;

function openCart() {
    const cartSection = document.getElementById('cart');
    cartSection.style.display = 'block';
    updateCartTotal();
}
function updateCart() {
    const cartItemsList = document.getElementById('cart-items');
    cartItemsList.innerHTML = '';

    cartItems.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price}`;
        cartItemsList.appendChild(listItem);
    });

    updateCartTotal();
}
function updateCartTotal() {
    const cartSubtotal = document.getElementById('cart-subtotal');
    const subtotal = cartItems.reduce((total, item) => total + item.price, 0);
    cartSubtotal.textContent = subtotal.toFixed(2);
}
window.onload = function() {
    renderProducts();
    updateCartTotal();
};


