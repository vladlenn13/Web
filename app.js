document.addEventListener('DOMContentLoaded', function() {
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
document.addEventListener('DOMContentLoaded', function () {
    const cellContainer = document.getElementById('cellContainer');

    for (let i = 1; i <= 5; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.dataset.id = i;

        // Создание QR-кода для каждой ячейки
        const qr = new QRious({
            value: `https://vladlenn13.github.io/Web/order/${i}`, // Замените ссылку на вашу страницу со статусом ячейки
            size: 100 // Размер QR-кода
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
        const qrImage = document.createElement('img');
        qrImage.src = qr.toDataURL();
        qrImage.alt = `QR-код для ячейки ${i}`;

    function resetSelects() {
        document.getElementById('firstCourse').selectedIndex = 0;
        document.getElementById('secondCourse').selectedIndex = 0;
        document.getElementById('drink').selectedIndex = 0;
        document.getElementById('salad').selectedIndex = 0;
        cell.appendChild(qrImage);
        cellContainer.appendChild(cell);
    }

    checkoutBtn.addEventListener('click', function() {
        window.location.href = 'https://vladlenn13.github.io/Web/order';
    });

    var menuItems = document.querySelectorAll('.menuItem');
    menuItems.forEach(function(item) {
        item.addEventListener('click', function() {
            var itemName = this.textContent;
            updateOrderList(itemName.replace(/\s+/g, ''), itemName);
    const cells = document.querySelectorAll('.cell');

    cells.forEach(cell => {
        cell.addEventListener('click', () => {
            const isBooked = cell.classList.contains('booked');
            const isReserved = cell.classList.contains('reserved');

            if (isBooked) {
                alert('Ячейка занята, выберете другую!');
            } else if (isReserved) {
                const confirmCancel = confirm('Вы хотите отменить бронь на эту ячейку?');
                if (confirmCancel) {
                    cell.classList.remove('reserved');
                    cell.classList.add('booked');
                    alert('Вы успешно отменили бронь на ячейке');
                }
            } else {
                const confirmBooking = confirm(`Вы хотите забронировать ячейку ${cell.dataset.id}?`);
                if (confirmBooking) {
                    cell.classList.remove('cell');
                    cell.classList.add('reserved');
                    alert(`Вы успешно забронировали ячейку ${cell.dataset.id}`);
                }
            }
        });
    });
});
