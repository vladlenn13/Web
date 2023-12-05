function addToCart(item) {
    const cartItems = document.getElementById('cartItems');
    const listItem = document.createElement('li');
    listItem.textContent = item;

    // Добавление крестика для удаления из корзины
    const deleteIcon = document.createElement('span');
    deleteIcon.textContent = '❌';
    deleteIcon.classList.add('deleteItem');
    deleteIcon.addEventListener('click', function () {
        listItem.remove();
    });

    listItem.appendChild(deleteIcon);
    cartItems.appendChild(listItem);
}

document.getElementById('complexMealBtn').addEventListener('click', function () {
    const complexMealSubMenu = document.getElementById('complexMealSubMenu');
    if (complexMealSubMenu.style.display === 'none' || complexMealSubMenu.style.display === '') {
        complexMealSubMenu.style.display = 'block';
    } else {
        complexMealSubMenu.style.display = 'none';
    }
});

function addItemListener(id) {
    document.getElementById(id).addEventListener('change', function () {
        const selectedItem = this.value;
        const cartItems = document.querySelectorAll('#cartItems li');

        let alreadyExists = false;
        cartItems.forEach(function (item) {
            if (item.textContent.includes(selectedItem)) {
                item.remove();
                alreadyExists = true;
            }
        });

        if (!alreadyExists) {
            addToCart(selectedItem);
        }
    });
}

addItemListener('firstCourse');
addItemListener('secondCourse');
addItemListener('drink');
addItemListener('salad');
