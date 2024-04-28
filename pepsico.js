// app.js
document.addEventListener("DOMContentLoaded", function () {
    // Mock data (replace with actual data from backend)
    const distributorData = [
        {
            name: "Distributor A",
            lastMonthShipped: 1000,
            forecastedGoods: 1200,
            ytdAverage: 950,
        },
        // Add more distributor data here
    ];

    // Populate distributor cards
    const distributorContainer = document.querySelector(".dashboard");
    distributorData.forEach((distributor) => {
        const card = document.createElement("div");
        card.classList.add("distributor-card");
        card.innerHTML = `
            <h2>${distributor.name}</h2>
            <p>Last Month's Shipped Goods: <span>${distributor.lastMonthShipped}</span></p>
            <p>Forecasted Goods for Next Month: <span>${distributor.forecastedGoods}</span></p>
            <p>Year-to-Date Average: <span>${distributor.ytdAverage}</span></p>
        `;
        distributorContainer.appendChild(card);
    });
});
