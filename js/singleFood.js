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