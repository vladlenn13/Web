document.addEventListener('DOMContentLoaded', function() {
    var complexMealBtn = document.getElementById('complexMealBtn');
    var complexMealSubMenu = document.getElementById('complexMealSubMenu');
    var confirmComplexMealBtn = document.getElementById('confirmComplexMealBtn');
    var checkoutBtn = document.querySelector('button'); // Находим первую кнопку на странице
    var cartItems = document.getElementById('cartItems');

    function updateOrderList(orderElementId, orderText) {
        var existingOrderItem = document.getElementById(`${orderElementId}-item`);

        if (!existingOrderItem) {
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
        }
    }

    function saveOrderToLocalStorage() {
        var items = Array.from(cartItems.children).map(function(item) {
            return item.textContent.replace('❌', '').trim(); // Получаем текст заказанных товаров
        });

        localStorage.setItem('orderItems', JSON.stringify(items)); // Сохраняем заказ в локальное хранилище
    }

    complexMealBtn.addEventListener('click', function(e) {
        e.preventDefault();
        complexMealSubMenu.style.display = 'block';
        confirmComplexMealBtn.style.display = 'block';
    });

    confirmComplexMealBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var firstCourse = document.getElementById('firstCourse').value;
        var secondCourse = document.getElementById('secondCourse').value;
        var drink = document.getElementById('drink').value;
        var salad = document.getElementById('salad').value;
        var orderText = `Комплексный обед: ${firstCourse}, ${secondCourse}, ${drink}, ${salad}`;
        updateOrderList('complexMeal', orderText);
        complexMealSubMenu.style.display = 'none';
        confirmComplexMealBtn.style.display = 'none';
        resetSelects();
    });

    function resetSelects() {
        document.getElementById('firstCourse').selectedIndex = 0;
        document.getElementById('secondCourse').selectedIndex = 0;
        document.getElementById('drink').selectedIndex = 0;
        document.getElementById('salad').selectedIndex = 0;
    }

    checkoutBtn.addEventListener('click', function() {
        saveOrderToLocalStorage(); // Сохраняем заказ перед переходом на страницу оформления заказа
        window.location.href = 'https://vladlenn13.github.io/Web/order';
    });

    var menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var itemName = this.textContent;
            updateOrderList(itemName.replace(/\s+/g, ''), itemName);
        });
    });
});
