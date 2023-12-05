document.addEventListener('DOMContentLoaded', function() {
    function updateOrderList(orderElementId, isChecked, orderText) {
        var orderList = document.getElementById('cartItems');
        var existingOrderItem = document.querySelector(`#${orderElementId}-item`);

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

    var menuItems = document.querySelectorAll('.menu li a');
    menuItems.forEach(function(item) {
        if (item.nextElementSibling && item.nextElementSibling.tagName === 'UL') {
            item.addEventListener('click', function(e) {
                e.preventDefault();
                var submenu = this.nextElementSibling;
                submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
            });
        } else {
            item.addEventListener('click', function() {
                this.classList.toggle('checked');
                updateOrderList(this.id, this.classList.contains('checked'), this.textContent);
            });
        }
    });
});
