document.addEventListener('DOMContentLoaded', function() {
    var checkoutBtn = document.getElementById('checkoutBtn');
    var cartItems = document.getElementById('cartItems');

    function updateOrderList(orderElementId, orderText, isChecked) {
        var existingOrderItem = document.getElementById(`${orderElementId}-item`);

        if (isChecked) {
            var li = document.createElement('li');
            li.textContent = orderText;
            li.id = `${orderElementId}-item`;

            var deleteIcon = document.createElement('span');
            deleteIcon.textContent = '❌';
            deleteIcon.classList.add('deleteItem');
            deleteIcon.addEventListener('click', function() {
                li.remove();
            });

            li.appendChild(deleteIcon);
            cartItems.appendChild(li);
        } else if (!isChecked && existingOrderItem) {
            existingOrderItem.remove();
        }
    }

    function addToCart(item, itemName) {
        item.addEventListener('click', function() {
            this.classList.toggle('checked');
            updateOrderList(item.id, itemName, this.classList.contains('checked'));
        });
    }

    var menuItems = document.querySelectorAll('.menu li a');
    menuItems.forEach(function(item) {
        if (item.nextElementSibling && item.nextElementSibling.tagName === 'UL') {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                var submenu = this.nextElementSibling;
                submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
            });
        } else {
            addToCart(item, item.textContent);
        }
    });

    var confirmComplexMealBtn = document.getElementById('confirmComplexMealBtn');
    var complexMealItems = document.querySelectorAll('#complexMealSubMenu select');
    
    confirmComplexMealBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var orderText = 'Комплексный обед: ';
        complexMealItems.forEach(function(item, index) {
            orderText += item.value;
            if (index !== complexMealItems.length - 1) {
                orderText += ', ';
            }
        });
        updateOrderList('complexMeal', orderText, true);
        resetComplexMeal();
    });

    function resetComplexMeal() {
        complexMealItems.forEach(function(item) {
            item.selectedIndex = 0;
        });
    }

    checkoutBtn.addEventListener('click', function() {
        // Дополнительная логика для оформления заказа
    });
});
