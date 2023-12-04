function handleOrderSelection(elementId, orderElementId) {
  var menuItem = document.getElementById(elementId);
  var orderItem = document.getElementById(orderElementId);

  menuItem.addEventListener('click', function(e) {
    e.preventDefault();
    orderItem.classList.toggle('checked');
    updateOrderList(orderElementId, orderItem.classList.contains('checked'));
  });
}

function updateOrderList(orderElementId, isChecked) {
  var orderList = document.getElementById('orderList');
  var orderText = document.getElementById(orderElementId).previousSibling.textContent;
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

handleOrderSelection('complexLink', 'complexOrder');
handleOrderSelection('first-dish', 'firstDishOrder');
handleOrderSelection('second-dish', 'secondDishOrder');
handleOrderSelection('salad', 'saladOrder');
handleOrderSelection('drink', 'drinkOrder');
handleOrderSelection('pizza', 'pizzaOrder');
handleOrderSelection('sushi', 'sushiOrder');
handleOrderSelection('sausage', 'sausageOrder');
