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
