document.addEventListener('DOMContentLoaded', function() {
    const cartItemsContainer = document.getElementById('cartItems');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach(item => {
            const itemElement = document.createElement('tr');
            itemElement.innerHTML = `
                <td><img src="img/icon/remove.png" alt="" width="20px" height="20px" style="cursor: pointer;" class="remove-item"></td>
                <td><img src="${item.image}" alt="${item.title}" class="cartFoodImg"></td>
                <td>${item.title}</td>
                <td class="item-price">${parseFloat(item.price).toFixed(2)}</td>
                <td><input type="number" value="${parseInt(item.quantity) || 1}" min="1" class="foodQuantity"></td>
                <td class="singleFoodPrice">৳ ${(parseFloat(item.price) * (parseInt(item.quantity) || 1)).toFixed(2)} BDT</td>
            `;
            cartItemsContainer.appendChild(itemElement);
        });

        // Calculate initial total
        updateCartTotal();
    }

    // Add event listener for quantity changes
    cartItemsContainer.addEventListener('input', function(e) {
        if (e.target.classList.contains('foodQuantity')) {
            const row = e.target.closest('tr');
            const quantity = parseInt(e.target.value) || 1;
            const priceText = row.querySelector('.item-price').textContent;
            const price = parseFloat(priceText);

            if (!isNaN(price)) {
                // Update single item total
                row.querySelector('.singleFoodPrice').textContent = `৳${(price * quantity).toFixed(2)} BDT`;
                
                // Update cart total
                updateCartTotal();
                
                // Update quantity in localStorage
                updateCartStorage(row, quantity);
            } else {
                console.error('Invalid price:', priceText);
            }
        }
    });

    // Add event listener for remove buttons
    cartItemsContainer.addEventListener('click', function(e) {
        if (e.target.closest('.remove-item')) {
            const row = e.target.closest('tr');
            removeCartItem(row);
        }
    });
});

function updateCartTotal() {
    const prices = document.querySelectorAll('.singleFoodPrice');
    let total = 0;

    prices.forEach(price => {
        // Extract number from price text (remove non-numeric characters)
        const priceValue = parseFloat(price.textContent.replace(/[^\d.-]/g, ''));

        // Debugging: Check extracted price value
        console.log('Extracted price value:', priceValue);

        if (!isNaN(priceValue)) {
            total += priceValue;
        } else {
            console.error('Invalid price value:', price.textContent);
        }
    });

    // Update total display if you have a total element
    const totalElement = document.getElementById('cartTotal');
    if (totalElement) {
        totalElement.textContent = `৳${total.toFixed(2)} BDT`;
    }
}

function updateCartStorage(row, newQuantity) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemTitle = row.querySelector('td:nth-child(3)').textContent;
    
    cart = cart.map(item => {
        if (item.title === itemTitle) {
            return {...item, quantity: newQuantity};
        }
        return item;
    });

    localStorage.setItem('cart', JSON.stringify(cart));
}

function removeCartItem(row) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const itemTitle = row.querySelector('td:nth-child(3)').textContent;
    
    // Remove from localStorage
    cart = cart.filter(item => item.title !== itemTitle);
    localStorage.setItem('cart', JSON.stringify(cart));
    // Remove from DOM
    row.remove();
    // Update cart total
    updateCartTotal();
    // Show empty cart message if no items left
    if (cart.length === 0) {
        document.getElementById('cartItems').innerHTML = '<p>Your cart is empty.</p>';
    }
}