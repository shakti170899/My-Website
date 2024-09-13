document.addEventListener('DOMContentLoaded', () => {
    // Get totals from localStorage
    const deTotals = JSON.parse(localStorage.getItem('deTotals')) || {};
    const kiranaTotals = JSON.parse(localStorage.getItem('kiranaTotals')) || {};

    // Delivery Executive totals
    const deTotal2000Qty = deTotals.total2000Qty || 0;
    const deTotal2000 = deTotals.total2000 || 0;
    const deTotal500Qty = deTotals.total500Qty || 0;
    const deTotal500 = deTotals.total500 || 0;
    const deTotal200Qty = deTotals.total200Qty || 0;
    const deTotal200 = deTotals.total200 || 0;
    const deTotal100Qty = deTotals.total100Qty || 0;
    const deTotal100 = deTotals.total100 || 0;
    const deTotal50Qty = deTotals.total50Qty || 0;
    const deTotal50 = deTotals.total50 || 0;
    const deTotal20Qty = deTotals.total20Qty || 0;
    const deTotal20 = deTotals.total20 || 0;
    const deTotal10Qty = deTotals.total10Qty || 0;
    const deTotal10 = deTotals.total10 || 0;
    const deTotalCoinsQty = deTotals.totalCoinsQty || 0;
    const deTotalCoins = deTotals.totalCoins || 0;
    const deTotalOthersQty = deTotals.totalOthersQty || 0;
    const deTotalOthers = deTotals.totalOthers || 0;

    // Kirana totals
    const kiranaTotal2000Qty = kiranaTotals.total2000Qty || 0;
    const kiranaTotal2000 = kiranaTotals.total2000 || 0;
    const kiranaTotal500Qty = kiranaTotals.total500Qty || 0;
    const kiranaTotal500 = kiranaTotals.total500 || 0;
    const kiranaTotal200Qty = kiranaTotals.total200Qty || 0;
    const kiranaTotal200 = kiranaTotals.total200 || 0;
    const kiranaTotal100Qty = kiranaTotals.total100Qty || 0;
    const kiranaTotal100 = kiranaTotals.total100 || 0;
    const kiranaTotal50Qty = kiranaTotals.total50Qty || 0;
    const kiranaTotal50 = kiranaTotals.total50 || 0;
    const kiranaTotal20Qty = kiranaTotals.total20Qty || 0;
    const kiranaTotal20 = kiranaTotals.total20 || 0;
    const kiranaTotal10Qty = kiranaTotals.total10Qty || 0;
    const kiranaTotal10 = kiranaTotals.total10 || 0;
    const kiranaTotalCoinsQty = kiranaTotals.totalCoinsQty || 0;
    const kiranaTotalCoins = kiranaTotals.totalCoins || 0;
    const kiranaTotalOthersQty = kiranaTotals.totalOthersQty || 0;
    const kiranaTotalOthers = kiranaTotals.totalOthers || 0;

    // Update Delivery Executive data
    document.getElementById('de2000Qty').textContent = deTotal2000Qty;
    document.getElementById('de2000').textContent = deTotal2000;
    document.getElementById('de500Qty').textContent = deTotal500Qty;
    document.getElementById('de500').textContent = deTotal500;
    document.getElementById('de200Qty').textContent = deTotal200Qty;
    document.getElementById('de200').textContent = deTotal200;
    document.getElementById('de100Qty').textContent = deTotal100Qty;
    document.getElementById('de100').textContent = deTotal100;
    document.getElementById('de50Qty').textContent = deTotal50Qty;
    document.getElementById('de50').textContent = deTotal50;
    document.getElementById('de20Qty').textContent = deTotal20Qty;
    document.getElementById('de20').textContent = deTotal20;
    document.getElementById('de10Qty').textContent = deTotal10Qty;
    document.getElementById('de10').textContent = deTotal10;
    document.getElementById('deCoinsQty').textContent = deTotalCoinsQty;
    document.getElementById('deCoins').textContent = deTotalCoins;
    document.getElementById('deOthersQty').textContent = deTotalOthersQty;
    document.getElementById('deOthers').textContent = deTotalOthers;

    // Update Kirana data
    document.getElementById('kirana2000Qty').textContent = kiranaTotal2000Qty;
    document.getElementById('kirana2000').textContent = kiranaTotal2000;
    document.getElementById('kirana500Qty').textContent = kiranaTotal500Qty;
    document.getElementById('kirana500').textContent = kiranaTotal500;
    document.getElementById('kirana200Qty').textContent = kiranaTotal200Qty;
    document.getElementById('kirana200').textContent = kiranaTotal200;
    document.getElementById('kirana100Qty').textContent = kiranaTotal100Qty;
    document.getElementById('kirana100').textContent = kiranaTotal100;
    document.getElementById('kirana50Qty').textContent = kiranaTotal50Qty;
    document.getElementById('kirana50').textContent = kiranaTotal50;
    document.getElementById('kirana20Qty').textContent = kiranaTotal20Qty;
    document.getElementById('kirana20').textContent = kiranaTotal20;
    document.getElementById('kirana10Qty').textContent = kiranaTotal10Qty;
    document.getElementById('kirana10').textContent = kiranaTotal10;
    document.getElementById('kiranaCoinsQty').textContent = kiranaTotalCoinsQty;
    document.getElementById('kiranaCoins').textContent = kiranaTotalCoins;
    document.getElementById('kiranaOthersQty').textContent = kiranaTotalOthersQty;
    document.getElementById('kiranaOthers').textContent = kiranaTotalOthers;

    // Calculate totals
    const calculateTotal = (deQty, deAmount, kiranaQty, kiranaAmount) => {
        return {
            totalQty: (parseFloat(deQty) || 0) + (parseFloat(kiranaQty) || 0),
            totalAmount: (parseFloat(deAmount) || 0) + (parseFloat(kiranaAmount) || 0)
        };
    };

    const { totalQty: total2000Qty, totalAmount: total2000 } = calculateTotal(
        deTotal2000Qty,
        deTotal2000,
        kiranaTotal2000Qty,
        kiranaTotal2000
    );
    document.getElementById('total2000Qty').textContent = total2000Qty;
    document.getElementById('total2000').textContent = total2000;

    const { totalQty: total500Qty, totalAmount: total500 } = calculateTotal(
        deTotal500Qty,
        deTotal500,
        kiranaTotal500Qty,
        kiranaTotal500
    );
    document.getElementById('total500Qty').textContent = total500Qty;
    document.getElementById('total500').textContent = total500;

    const { totalQty: total200Qty, totalAmount: total200 } = calculateTotal(
        deTotal200Qty,
        deTotal200,
        kiranaTotal200Qty,
        kiranaTotal200
    );
    document.getElementById('total200Qty').textContent = total200Qty;
    document.getElementById('total200').textContent = total200;

    const { totalQty: total100Qty, totalAmount: total100 } = calculateTotal(
        deTotal100Qty,
        deTotal100,
        kiranaTotal100Qty,
        kiranaTotal100
    );
    document.getElementById('total100Qty').textContent = total100Qty;
    document.getElementById('total100').textContent = total100;

    const { totalQty: total50Qty, totalAmount: total50 } = calculateTotal(
        deTotal50Qty,
        deTotal50,
        kiranaTotal50Qty,
        kiranaTotal50
    );
    document.getElementById('total50Qty').textContent = total50Qty;
    document.getElementById('total50').textContent = total50;

    const { totalQty: total20Qty, totalAmount: total20 } = calculateTotal(
        deTotal20Qty,
        deTotal20,
        kiranaTotal20Qty,
        kiranaTotal20
    );
    document.getElementById('total20Qty').textContent = total20Qty;
    document.getElementById('total20').textContent = total20;

    const { totalQty: total10Qty, totalAmount: total10 } = calculateTotal(
        deTotal10Qty,
        deTotal10,
        kiranaTotal10Qty,
        kiranaTotal10
    );
    document.getElementById('total10Qty').textContent = total10Qty;
    document.getElementById('total10').textContent = total10;

    const { totalQty: totalCoinsQty, totalAmount: totalCoins } = calculateTotal(
        deTotalCoinsQty,
        deTotalCoins,
        kiranaTotalCoinsQty,
        kiranaTotalCoins
    );
    document.getElementById('totalCoinsQty').textContent = totalCoinsQty;
    document.getElementById('totalCoins').textContent = totalCoins;

    const { totalQty: totalOthersQty, totalAmount: totalOthers } = calculateTotal(
        deTotalOthersQty,
        deTotalOthers,
        kiranaTotalOthersQty,
        kiranaTotalOthers
    );
    document.getElementById('totalOthersQty').textContent = totalOthersQty;
    document.getElementById('totalOthers').textContent = totalOthers;

    // Calculate grand totals
    const grandTotalDE = Object.values(deTotals).reduce((acc, value) => acc + (parseFloat(value) || 0), 0);
    const grandTotalKirana = Object.values(kiranaTotals).reduce((acc, value) => acc + (parseFloat(value) || 0), 0);
    const grandTotal = grandTotalDE + grandTotalKirana;

    document.getElementById('grandTotalDE').textContent = grandTotalDE;
    document.getElementById('grandTotalKirana').textContent = grandTotalKirana;
    document.getElementById('grandTotal').textContent = grandTotal;
});
