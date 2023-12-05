document.addEventListener('DOMContentLoaded', function () {
    const cellContainer = document.getElementById('cellContainer');
    const timeSlots = generateTimeSlots(); // Генерация временных слотов

    for (let i = 1; i <= 5; i++) {
        const cellWrapper = document.createElement('div');
        cellWrapper.classList.add('cell');

        const cellNumber = document.createElement('p');
        cellNumber.textContent = `Ячейка №${i}`;
        cellNumber.style.marginBottom = '5px';

        const qr = new QRious({
            value: `https://vladlenn13.github.io/Web/order/${i}`,
            size: 100
        });

        const qrImage = document.createElement('img');
        qrImage.src = qr.toDataURL();
        qrImage.alt = `QR-код для ячейки ${i}`;

        cellWrapper.appendChild(cellNumber);
        cellWrapper.appendChild(qrImage);
        cellContainer.appendChild(cellWrapper);

        if (localStorage.getItem(`cell_${i}`) === 'reserved') {
            cellWrapper.classList.add('reserved');
            const reservationInfo = JSON.parse(localStorage.getItem(`reservation_${i}`));
            const reservationText = document.createElement('p');
            reservationText.textContent = `Ячейка забронирована пользователем: ${reservationInfo.name} Время бронирования: ${reservationInfo.time}`;
            cellWrapper.appendChild(reservationText);
        }

        cellWrapper.addEventListener('click', () => {
            const isBooked = cellWrapper.classList.contains('booked');
            const isReserved = cellWrapper.classList.contains('reserved');

            if (isBooked) {
                alert('Ячейка занята, выберите другую!');
            } else if (isReserved) {
                const reservationInfo = JSON.parse(localStorage.getItem(`reservation_${i}`));
                alert(`Ячейка забронирована пользователем: ${reservationInfo.name} Время бронирования: ${reservationInfo.time}`);
            } else {
                const name = prompt('Введите ваше имя:');
                if (name) {
                    const selectedTime = prompt('Выберите время бронирования:\n' + timeSlots.join('\n'));
                    if (selectedTime && timeSlots.includes(selectedTime)) {
                        const time = new Date().toLocaleString();
                        const reservationInfo = { name, time, selectedTime };
                        localStorage.setItem(`cell_${i}`, 'reserved');
                        localStorage.setItem(`reservation_${i}`, JSON.stringify(reservationInfo));
                        cellWrapper.classList.add('reserved');
                        const reservationText = document.createElement('p');
                        reservationText.textContent = `Ячейка забронирована пользователем: ${name} Время бронирования: ${time}, ${selectedTime}`;
                        cellWrapper.appendChild(reservationText);
                        alert(`Вы успешно забронировали ячейку ${i}`);
                    } else {
                        alert('Выберите корректное время из списка');
                    }
                }
            }
        });
    }
});

function generateTimeSlots() {
    const timeSlots = [];
    const startTime = 10 * 60; // Время в минутах (10:00)
    const endTime = 17 * 60; // Время в минутах (17:00)
    const interval = 20; // Интервал в минутах

    for (let minute = startTime; minute < endTime; minute += interval) {
        const hours = Math.floor(minute / 60).toString().padStart(2, '0');
        const minutes = (minute % 60).toString().padStart(2, '0');
        timeSlots.push(`${hours}:${minutes}`);
    }

    return timeSlots;
}
