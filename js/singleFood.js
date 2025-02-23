// foods 
function viewProduct(button) {
    let product = button.closest(".foods");

    let productData = {
        image: product.getAttribute("data-image"),
        price: product.getAttribute("data-price"),
        details: product.getAttribute("data-details")
    };
    console.log(productData)
    localStorage.setItem("selectedProduct", JSON.stringify(productData));

    // window.location.href = "singleFood.html";
}

// single food 
document.addEventListener("DOMContentLoaded", function() {
    let productData = JSON.parse(localStorage.getItem("selectedProduct"));

    if (productData) {
        document.getElementById("singleFoodImg").src = productData.image;
        document.getElementById("singleFoodPrice").innerText = productData.price;
        document.getElementById("singleFoodTitle").innerText = productData.details;
    }
});

// go to cart
function AddCart() {
    document.getElementById("addToCart").innerHTML = '<img src="img/icon/order.png" alt="" width="20px" height="20px"> Added to Cart';

    const product = {
        image: document.getElementById('singleFoodImg').src,
        title: document.getElementById('singleFoodTitle').textContent,
        price: parseFloat(document.getElementById('singleFoodPrice').textContent),
        quantity: parseFloat(document.querySelector('#singleFood input[type="number"]').value)
    };
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));

    alert('Product added to cart!');
}
function order(){
    alert("We Recived Your Order.");
    document.getElementById("order").innerHTML = '<img src="img/icon/clock.png" alt="" width="20px" height="20px"> Ordered';
};
// single food 