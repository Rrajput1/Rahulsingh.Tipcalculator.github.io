document.addEventListener("DOMContentLoaded", function () {
    const tipForm = document.getElementById("tipForm");
    const billTotal = document.getElementById("billTotal");
    const tipPercentage = document.getElementById("tipPercentage");
    const tipPercentageValue = document.getElementById("tipPercentageValue");
    const tipAmount = document.getElementById("tipAmount");
    const totalBill = document.getElementById("totalBill");

    tipForm.addEventListener("input", function () {
        const bill = parseFloat(billTotal.value);
        const tip = parseInt(tipPercentage.value);

        if (!isNaN(bill)) {
            tipPercentageValue.innerText = tip + "%";
            const tipValue = (bill * tip) / 100;
            const total = bill + tipValue;

            tipAmount.value = tipValue.toFixed(2);
            totalBill.value = total.toFixed(2);
        } else {
            tipPercentageValue.innerText = "0%";
            tipAmount.value = "";
            totalBill.value = "";
        }
    });
});
