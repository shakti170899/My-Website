document.addEventListener('DOMContentLoaded', () => {
    // Generate 20 rows for Kirana Partner agents
    const tableBody = document.querySelector('#KiranaPartner tbody');
    for (let i = 1; i <= 20; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${i}</td>
            <td><input type="text" maxlength="30" placeholder="Enter Name"></td>
            <td><input type="number" class="collection" placeholder="0"></td>
            <td><input type="number" class="deposit" placeholder="0" readonly></td>
            <td><input type="number" class="difference" placeholder="0" readonly></td>
            <td><input type="number" class="collected" placeholder="0" readonly></td>
            <td><input type="text" class="status" placeholder="Status" readonly></td>
            <td><input type="number" class="note" data-value="2000" placeholder="0"></td>
            <td><input type="number" class="note" data-value="500" placeholder="0"></td>
            <td><input type="number" class="note" data-value="200" placeholder="0"></td>
            <td><input type="number" class="note" data-value="100" placeholder="0"></td>
            <td><input type="number" class="note" data-value="50" placeholder="0"></td>
            <td><input type="number" class="note" data-value="20" placeholder="0"></td>
            <td><input type="number" class="note" data-value="10" placeholder="0"></td>
            <td><input type="number" class="note" data-value="1" placeholder="0"></td>
            <td><input type="number" class="note" data-value="1" placeholder="0"></td>
        `;
        tableBody.appendChild(row);
    }

    // Handle input events for note fields
    document.querySelectorAll('.note').forEach(noteField => {
        noteField.addEventListener('input', function () {
            const row = this.closest('tr');
            const notes = row.querySelectorAll('.note');
            let total = 0;

            notes.forEach(note => {
                const value = parseInt(note.getAttribute('data-value'));
                const quantity = parseInt(note.value) || 0;
                total += value * quantity;
            });

            const depositField = row.querySelector('.deposit');
            const collectionField = row.querySelector('.collection');
            const differenceField = row.querySelector('.difference');
            const collectedField = row.querySelector('.collected');
            const statusField = row.querySelector('.status');

            depositField.value = total;
            collectedField.value = total;
            const collectionAmount = parseInt(collectionField.value) || 0;
            const difference = collectionAmount - total;
            differenceField.value = difference;

            if (difference === 0) {
                statusField.value = "Paid";
                statusField.classList.add('paid');
            } else if (difference < 0) {
                statusField.value = "Excess";
                statusField.classList.add('excess');
            } else {
                statusField.value = "Due";
                statusField.classList.add('due');
            }
        });
    });

    // Handle input events for collection fields
    document.querySelectorAll('.collection').forEach(collectionField => {
        collectionField.addEventListener('input', function () {
            const row = this.closest('tr');
            const depositField = row.querySelector('.deposit');
            const differenceField = row.querySelector('.difference');
            const statusField = row.querySelector('.status');

            const collectionAmount = parseInt(this.value) || 0;
            const depositAmount = parseInt(depositField.value) || 0;
            const difference = collectionAmount - depositAmount;
            differenceField.value = difference;

            if (difference === 0) {
                statusField.value = "Paid";
                statusField.classList.add('paid');
            } else if (difference < 0) {
                statusField.value = "Excess";
                statusField.classList.add('excess');
            } else {
                statusField.value = "Due";
                statusField.classList.add('due');
            }
        });
    });
});
