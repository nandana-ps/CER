function convert() {
    // Example rates (USD=1, EUR=0.9, INR=83)
    const rates = {
        "USD": 1,
        "EUR": 0.9,
        "INR": 83
    };

    
    const amount = parseFloat(document.getElementById("amount").value);
    const from = document.getElementById("from").value;
    const to = document.getElementById("to").value;

    if (isNaN(amount)) {
        document.getElementById("result").innerText = "Enter a valid amount.";
        return;
    }

    // Convert amount to USD, then to target currency
    const usdAmount = amount / rates[from];
    const converted = usdAmount * rates[to];
    document.getElementById("result").innerText =
        "Converted amount: " + converted.toFixed(2) + " " + to;
}