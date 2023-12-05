document.addEventListener('DOMContentLoaded', function() {
    var firstCourse = document.getElementById('firstCourse');
    var secondCourse = document.getElementById('secondCourse');
    var drink = document.getElementById('drink');
    var salad = document.getElementById('salad');
    var complexMealBtn = document.getElementById('complexMealBtn');
    var complexMealSubMenu = document.getElementById('complexMealSubMenu');
    var confirmComplexMealBtn = document.createElement('button');

    confirmComplexMealBtn.textContent = 'Подтвердить';
    confirmComplexMealBtn.style.display = 'none';
    complexMealSubMenu.appendChild(confirmComplexMealBtn);

    function updateOrderList(orderElementId, isChecked, orderText) {
        var orderList = document.getElementById('cartItems');
        var existingOrderItem = document.getElementById(`${orderElementId}-item`);

        if (isChecked && !existingOrderItem) {
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
            orderList.appendChild(li);
        } else if (!isChecked && existingOrderItem) {
            existingOrderItem.remove();
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
        updateOrderList('complexMeal', true, orderText);
        complexMealSubMenu.style.display = 'none';
        confirmComplexMealBtn.style.display = 'none';
        firstCourse.selectedIndex = 0;
        secondCourse.selectedIndex = 0;
        drink.selectedIndex = 0;
        salad.selectedIndex = 0;
    });
});
