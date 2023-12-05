// Определяем обработчик для открытия/закрытия подменю
function handleSubMenu(submenuElement) {
  submenuElement.addEventListener('click', function(e) {
    e.preventDefault();
    var submenu = this.nextElementSibling;
    submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
  });
}

// Определяем обработчик для выбора пункта меню
function handleOrderSelection(orderElementId, isSubMenu) {
  var orderItem = document.getElementById(orderElementId);
  orderItem.addEventListener('click', function() {
    if (!isSubMenu) {
      this.classList.toggle('checked');
      updateOrderList(this.id, this.classList.contains('checked'), this.textContent);
    }
  });
}

// Функция обновления списка заказа
function updateOrderList(orderElementId, isChecked, orderText) {
  var orderList = document.getElementById('cartItems');
  var existingOrderItem = document.querySelector(`#${orderElementId}-item`);

  if (isChecked && !existingOrderItem) {
    var li = document.createElement('li');
    li.textContent = orderText;
    li.id = `${orderElementId}-item`;

    // Добавляем крестик для удаления из корзины
    var deleteIcon = document.createElement('span');
    deleteIcon.textContent = '❌';
    deleteIcon.classList.add('deleteItem');
    deleteIcon.addEventListener('click', function () {
      li.remove();
    });

    li.appendChild(deleteIcon);
    orderList.appendChild(li);
  } else if (!isChecked && existingOrderItem) {
    existingOrderItem.remove();
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var menuItems = document.querySelectorAll('.menu ul li a');
    menuItems.forEach(function(item) {
        if (item.nextElementSibling && item.nextElementSibling.tagName === 'UL') {
            handleSubMenu(item);
            handleOrderSelection(item.id, true); // Добавляем обработчик для пунктов меню-подменю
        } else {
            handleOrderSelection(item.id, false); // Добавляем обработчик для пунктов меню-заказа
        }
    });
});
