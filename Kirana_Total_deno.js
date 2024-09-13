document.addEventListener('DOMContentLoaded', () => {
    const total2000Qty = document.getElementById('total2000Qty');
    const total2000 = document.getElementById('total2000');
    const total500Qty = document.getElementById('total500Qty');
    const total500 = document.getElementById('total500');
    const total200Qty = document.getElementById('total200Qty');
    const total200 = document.getElementById('total200');
    const total100Qty = document.getElementById('total100Qty');
    const total100 = document.getElementById('total100');
    const total50Qty = document.getElementById('total50Qty');
    const total50 = document.getElementById('total50');
    const total20Qty = document.getElementById('total20Qty');
    const total20 = document.getElementById('total20');
    const total10Qty = document.getElementById('total10Qty');
    const total10 = document.getElementById('total10');
    const totalCoinsQty = document.getElementById('totalCoinsQty');
    const totalCoins = document.getElementById('totalCoins');
    const totalOthersQty = document.getElementById('totalOthersQty');
    const totalOthers = document.getElementById('totalOthers');
    const grandTotal = document.getElementById('grandTotal');

    // Get data from localStorage
    const totals = JSON.parse(localStorage.getItem('totals')) || {};

    total2000Qty.textContent = totals.total2000Qty || 0;
    total2000.textContent = totals.total2000 || 0;
    total500Qty.textContent = totals.total500Qty || 0;
    total500.textContent = totals.total500 || 0;
    total200Qty.textContent = totals.total200Qty || 0;
    total200.textContent = totals.total200 || 0;
    total100Qty.textContent = totals.total100Qty || 0;
    total100.textContent = totals.total100 || 0;
    total50Qty.textContent = totals.total50Qty || 0;
    total50.textContent = totals.total50 || 0;
    total20Qty.textContent = totals.total20Qty || 0;
    total20.textContent = totals.total20 || 0;
    total10Qty.textContent = totals.total10Qty || 0;
    total10.textContent = totals.total10 || 0;
    totalCoinsQty.textContent = totals.totalCoinsQty || 0;
    totalCoins.textContent = totals.totalCoins || 0;
    totalOthersQty.textContent = totals.totalOthersQty || 0;
    totalOthers.textContent = totals.totalOthers || 0;

    // Calculate grand total
    const grandTotalAmount = (parseFloat(total2000.textContent) || 0) +
                             (parseFloat(total500.textContent) || 0) +
                             (parseFloat(total200.textContent) || 0) +
                             (parseFloat(total100.textContent) || 0) +
                             (parseFloat(total50.textContent) || 0) +
                             (parseFloat(total20.textContent) || 0) +
                             (parseFloat(total10.textContent) || 0) +
                             (parseFloat(totalCoins.textContent) || 0) +
                             (parseFloat(totalOthers.textContent) || 0);

    grandTotal.textContent = grandTotalAmount;
});
