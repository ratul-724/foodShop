// code for responsive menubar
let menuBar = document.getElementById("menuBar");
menuBar.addEventListener("click", function() {
    let navBarUl = document.getElementById("navBarUl");
   
    // Toggling display style
    if (navBarUl.style.display === "none" || navBarUl.style.display === "") {
        navBarUl.style.display = "block";
        menuBar.innerHTML = '<img src="img/icon/close.png" alt="close" width="20px" height="20px" style = "cursor: pointer;">';
    } else {
        navBarUl.style.display = "none";
        menuBar.innerHTML = '<img src="img/icon/menu.png" alt="menu" width="30px" height="30px" style = "cursor: pointer;">';
    }
});
// code for responsive menubar

// code for clicking on food item and going to single food page
let foodItemImg = document.getElementsByClassName("foodItemImg");
let foods = document.getElementsByClassName("foods");

for (let i = 0; i < foods.length; i++) {
    foods[i].addEventListener('click', function() {
        foods.href = "singleFood.html";
        window.location.href = foods.href;
    });
}
// code for clicking on food item and going to single food page

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