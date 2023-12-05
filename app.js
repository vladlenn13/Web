document.addEventListener('DOMContentLoaded', function () {
    var complexMealBtn = document.getElementById('complexMealBtn');
    var complexMealSubMenu = document.getElementById('complexMealSubMenu');
    var confirmComplexMealBtn = document.getElementById('confirmComplexMealBtn');
    var checkoutBtn = document.getElementById('checkoutBtn');
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
            deleteIcon.addEventListener('click', function () {
                li.remove();
            });

            li.appendChild(deleteIcon);
            cartItems.appendChild(li);
        }
    }

    function resetSelects() {
        document.getElementById('firstCourse').selectedIndex = 0;
        document.getElementById('secondCourse').selectedIndex = 0;
        document.getElementById('drink').selectedIndex = 0;
        document.getElementById('salad').selectedIndex = 0;
    }

    complexMealBtn.addEventListener('click', function (e) {
        e.preventDefault();
        complexMealSubMenu.style.display = 'block';
        confirmComplexMealBtn.style.display = 'block';
    });

    confirmComplexMealBtn.addEventListener('click', function (e) {
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

    checkoutBtn.addEventListener('click', function () {
        // Дополнительная логика для оформления заказа, если необходимо
        // Здесь вы можете добавить обработку оформления заказа
    });

    var pizzaItem = document.querySelector('.menuItem:nth-child(2)');
    var sushiItem = document.querySelector('.menuItem:nth-child(3)');
    var liptonItem = document.querySelector('.menuItem:nth-child(4)');
    var sausageItem = document.querySelector('.menuItem:nth-child(5)');

    pizzaItem.addEventListener('click', function () {
        updateOrderList('Pizza', 'Пицца');
    });

    sushiItem.addEventListener('click', function () {
        updateOrderList('Sushi', 'Суши');
    });

    liptonItem.addEventListener('click', function () {
        updateOrderList('Lipton', 'Липтон');
    });

    sausageItem.addEventListener('click', function () {
        updateOrderList('Sausage', 'Колбаса');
    });
});
