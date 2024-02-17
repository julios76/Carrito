// Productos disponibles
const products = [
    { id: 1, name: 'Producto 1', price: 10 },
    { id: 2, name: 'Producto 2', price: 20 },
    { id: 3, name: 'Producto 3', price: 30 }
];

// Función para autenticar usuarios (vulnerable a Inyección de SQL)
function authenticateUser(username, password) {
    const query = `SELECT * FROM users WHERE username='${username}' AND password='${password}'`;
    // Realizar la consulta a la base de datos y verificar las credenciales
    // Si las credenciales son válidas, permitir el inicio de sesión
    // De lo contrario, denegar el inicio de sesión
}

// Función para mostrar los productos disponibles
function displayProducts() {
    const productList = document.getElementById('product-list');
    productList.innerHTML = '';
    products.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productList.appendChild(li);
    });
}

// Carrito de compras
let cart = [];

// Función para agregar productos al carrito
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    cart.push(product);
    displayCart();
}

// Función para mostrar los productos en el carrito y calcular el total
function displayCart() {
    const cartList = document.getElementById('cart-list');
    cartList.innerHTML = '';
    let total = 0;
    cart.forEach(product => {
        const li = document.createElement('li');
        li.innerHTML = `
            <span>${product.name} - $${product.price}</span>
            <button onclick="removeFromCart(${product.id})">Eliminar</button>
        `;
        cartList.appendChild(li);
        total += product.price;
    });
    document.getElementById('total').innerText = `Total: $${total.toFixed(2)}`;
}

// Función para eliminar productos del carrito
function removeFromCart(productId) {
    const index = cart.findIndex(p => p.id === productId);
    cart.splice(index, 1);
    displayCart();
}

// Cargar productos al iniciar la página
displayProducts();