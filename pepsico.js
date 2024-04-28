// Mock data for 10 distributors (replace with actual data)
const distributors = [
    { name: "Saltyshore Soda Co.", shippedLastMonth: 2455, forecastedThisMonth: 2500, ytdAverage: 2000 },
    { name: "Gerbermin Sips", shippedLastMonth: 500, forecastedThisMonth: 455, ytdAverage: 643 },
    { name: "Wicker's", shippedLastMonth: 7600, forecastedThisMonth: 7000, ytdAverage: 8600 },
    { name: "Tips Taps", shippedLastMonth: 5444553, forecastedThisMonth: 5495321, ytdAverage: 5127384 },
    { name: "Hancho's", shippedLastMonth: 5644, forecastedThisMonth: 5744, ytdAverage: 5322 },
    { name: "Carlsburd", shippedLastMonth: 4321, forecastedThisMonth: 4123, ytdAverage: 4532 },
    { name: "Wholestream", shippedLastMonth: 65432, forecastedThisMonth: 64321, ytdAverage: 67654 },
    { name: "Fairings", shippedLastMonth: 3454, forecastedThisMonth: 4076, ytdAverage: 2343 },
    { name: "National Pour", shippedLastMonth: 20322, forecastedThisMonth: 20321, ytdAverage: 20319 }
];

// Function to create distributor cards
function createDistributorCard(distributor) {
    const card = document.createElement('div');
    card.classList.add('distributor-card');
    card.innerHTML = `
        <h2>${distributor.name}</h2>
        <p>Last Month: ${distributor.shippedLastMonth} units</p>
        <p>Forecast: ${distributor.forecastedThisMonth} units</p>
        <p>YTD Average: ${distributor.ytdAverage} units</p>
    `;
    return card;
}

// Populate distributor cards
const distributorsContainer = document.getElementById('distributors');
distributors.forEach((distributor) => {
    const card = createDistributorCard(distributor);
    distributorsContainer.appendChild(card);
});