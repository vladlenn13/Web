document.addEventListener('DOMContentLoaded', function() {
    var firstCourse = document.getElementById('firstCourse');
    var secondCourse = document.getElementById('secondCourse');
    var drink = document.getElementById('drink');
    var salad = document.getElementById('salad');
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
            deleteIcon.addEventListener('click', function() {
                li.remove();
            });

            li.appendChild(deleteIcon);
            cartItems.appendChild(li);
        }
    }

    complexMealBtn.addEventListener('click', function(e) {
        e.preventDefault();
        complexMealSubMenu.style.display = 'block';
        confirmComplexMealBtn.style.display = 'block';
    });

    confirmComplexMealBtn.addEventListener('click', function(e) {
        e.preventDefault();
        var orderText = `Комплексный обед: ${firstCourse.value}, ${secondCourse.value}, ${drink.value}, ${salad.value}`;
        updateOrderList('complexMeal', orderText);
        complexMealSubMenu.style.display = 'none';
        confirmComplexMealBtn.style.display = 'none';
        resetSelects();
    });

    function resetSelects() {
        firstCourse.selectedIndex = 0;
        secondCourse.selectedIndex = 0;
        drink.selectedIndex = 0;
        salad.selectedIndex = 0;
    }

    checkoutBtn.addEventListener('click', function() {
        // Дополнительная логика для оформления заказа, если необходимо
        // Здесь вы можете добавить обработку оформления заказа
    });
});
