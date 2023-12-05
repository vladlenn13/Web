document.addEventListener('DOMContentLoaded', function () {
    const cellContainer = document.getElementById('cellContainer');

    for (let i = 1; i <= 5; i++) {
        const cellWrapper = document.createElement('div');
        cellWrapper.classList.add('cell');

        const cellNumber = document.createElement('p');
        cellNumber.textContent = `Ячейка №${i}`;
        cellNumber.style.marginBottom = '5px';

        const qrContainer = document.createElement('div');
        qrContainer.classList.add('qr-container');

        const qr = new QRious({
            value: `https://vladlenn13.github.io/Web/order/${i}`,
            size: 100
        });

        const qrImage = document.createElement('img');
        qrImage.src = qr.toDataURL();
        qrImage.alt = `QR-код для ячейки ${i}`;

        qrContainer.appendChild(qrImage);
        cellWrapper.appendChild(cellNumber);
        cellWrapper.appendChild(qrContainer);
        cellContainer.appendChild(cellWrapper);

        cellWrapper.addEventListener('click', () => {
            const isBooked = cellWrapper.classList.contains('booked');
            const isReserved = cellWrapper.classList.contains('reserved');

            if (isBooked) {
                alert('Ячейка занята, выберете другую!');
            } else if (isReserved) {
                const confirmCancel = confirm('Вы хотите отменить бронь на эту ячейку?');
                if (confirmCancel) {
                    cellWrapper.classList.remove('reserved');
                    cellWrapper.classList.add('booked');
                    alert('Вы успешно отменили бронь на ячейке');
                }
            } else {
                const confirmBooking = confirm(`Вы хотите забронировать ячейку ${i}?`);
                if (confirmBooking) {
                    cellWrapper.classList.remove('cell');
                    cellWrapper.classList.add('reserved');
                    alert(`Вы успешно забронировали ячейку ${i}`);
                }
            }
        });
    }
});
