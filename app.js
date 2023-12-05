document.addEventListener('DOMContentLoaded', function() {
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

    var menuItems = document.querySelectorAll('.menu a');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            if (item.nextElementSibling && item.nextElementSibling.tagName === 'UL') {
                var submenu = item.nextElementSibling;
                submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
            } else {
                item.classList.toggle('checked');
                updateOrderList(item.id, item.classList.contains('checked'), item.textContent);
            }
        });
    });
});
