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

        const qrImage = document.createElement('img');
        qrImage.src = qr.toDataURL();
        qrImage.alt = `QR-код для ячейки ${i}`;

        cell.appendChild(qrImage);
        cellContainer.appendChild(cell);
    }

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
menu.html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <title>Меню столовой Шабла</title>
    <link rel="stylesheet" href="styles.css">
</head>

<body>
    <header>
        <h1>Меню столовой Шабла</h1>
        <nav>
            <ul class="menu">
                <li class="dropdown">
                    <a href="#" id="complexMealBtn">Комплексный обед</a>
                    <ul class="submenu" id="complexMealSubMenu" style="display: none;">
                        <li>Первое блюдо:
                            <select id="firstCourse">
                                <option value="Суп">Суп</option>
                                <option value="Борщ">Борщ</option>
                                <option value="Солянка">Солянка</option>
                            </select>
                        </li>
                        <li>Второе блюдо:
                            <select id="secondCourse">
                                <option value="Котлеты">Котлеты</option>
                                <option value="Рыба">Рыба</option>
                                <option value="Стейк">Стейк</option>
                            </select>
                        </li>
                        <li>Напиток:
                            <select id="drink">
                                <option value="Чай">Чай</option>
                                <option value="Кофе">Кофе</option>
                                <option value="Сок">Сок</option>
                            </select>
                        </li>
                        <li>Салаты:
                            <select id="salad">
                                <option value="Цезарь">Цезарь</option>
                                <option value="Греческий">Греческий</option>
                                <option value="Оливье">Оливье</option>
                            </select>
                        </li>
                        <li><button id="confirmComplexMealBtn" style="display: none;">Подтвердить</button></li>
                    </ul>
                </li>
                <li><a href="#" class="menuItem">Пицца</a></li>
                <li><a href="#" class="menuItem">Суши</a></li>
                <li><a href="#" class="menuItem">Липтон</a></li>
                <li><a href="#" class="menuItem">Колбаса</a></li>
            </ul>
        </nav>
    </header>

    <main>
        <div class="cart">
            <h2>Корзина</h2>
            <ul id="cartItems">
                <!-- Сюда будут добавляться выбранные товары -->
            </ul>
            <button id="checkoutBtn">Оформить заказ</button>
        </div>
    </main>

    <footer>
        <!-- Здесь можете добавить дополнительную информацию или ссылки -->
    </footer>

    <script src="app.js"></script>
</body>

</html>
