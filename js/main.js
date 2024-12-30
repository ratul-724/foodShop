let foodItemImg = document.getElementsByClassName("foodItemImg");
let foods = document.getElementsByClassName("foods");

for (let i = 0; i < foods.length; i++) {
    foods[i].addEventListener('click', function() {
        foods.href = "singleFood.html";
        window.location.href = foods.href;

        
    });
}

// for cart 
document.getElementById("foodQuantity").addEventListener("input", function() {
    const quantity = document.getElementById("foodQuantity").value;
    document.getElementById("singleFoodPrice").textContent = "৳" + (170 * quantity) + " BDT";
});
// for cart 
// single food 
function order(){
    alert("We Recived Your Order.");
    document.getElementById("order").innerHTML = '<img src="img/social/order.png" alt="" width="20px" height="20px"> Ordered';
};
function AddCart(){
    document.getElementById("addToCart").innerHTML = '<img src="img/cart.png" alt="" width="20px" height="20px"> Added to Cart';
};
// single food 