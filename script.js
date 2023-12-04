// Определяем обработчик для открытия/закрытия подменю
function handleSubMenu(submenuElement) {
  submenuElement.addEventListener('click', function(e) {
    e.preventDefault();
    var submenu = this.nextElementSibling;
    submenu.style.display = submenu.style.display === 'none' || submenu.style.display === '' ? 'block' : 'none';
  });
}

// Определяем обработчик для выбора пункта меню
function handleOrderSelection(orderElementId) {
  var orderItem = document.getElementById(orderElementId);
  orderItem.addEventListener('click', function() {
    this.classList.toggle('checked');
    updateOrderList(this.id, this.classList.contains('checked'), this.previousElementSibling.textContent);
  });
}

// Функция обновления списка заказа
function updateOrderList(orderElementId, isChecked, orderText) {
  var orderList = document.getElementById('orderList');
  var existingOrderItem = document.querySelector(`#${orderElementId}-item`);

  if (isChecked && !existingOrderItem) {
    var li = document.createElement('li');
    li.textContent = orderText;
    li.id = `${orderElementId}-item`;
    orderList.appendChild(li);
  } else if (!isChecked && existingOrderItem) {
    existingOrderItem.remove();
  }
}

// Назначаем обработчики для всех пунктов меню и подменю
var menuItems = document.querySelectorAll('.menu ul li a');
menuItems.forEach(function(item) {
  if (item.nextElementSibling && item.nextElementSibling.tagName === 'UL') {
    handleSubMenu(item);
  } else {
    handleOrderSelection(item.id);
  }
});
