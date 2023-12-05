function addToCart(item) {
    const cartItems = document.getElementById('cartItems');
    const listItem = document.createElement('li');
    listItem.textContent = item;
    cartItems.appendChild(listItem);
}

function checkout() {
    window.location.href = 'checkout.html';
}

document.getElementById('firstCourse').addEventListener('change', function() {
    const selectedFirstCourse = this.value;
    addToCart(selectedFirstCourse);
});

document.getElementById('secondCourse').addEventListener('change', function() {
    const selectedSecondCourse = this.value;
    addToCart(selectedSecondCourse);
});

document.getElementById('drink').addEventListener('change', function() {
    const selectedDrink = this.value;
    addToCart(selectedDrink);
});

document.getElementById('salad').addEventListener('change', function() {
    const selectedSalad = this.value;
    addToCart(selectedSalad);
});
