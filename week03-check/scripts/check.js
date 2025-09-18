// Function to calculate wind chill (Celsius version)
function calculateWindChill(tempC, windKmh) {
    // Wind chill formula (Celsius)
    return 13.12 + 0.6215 * tempC - 11.37 * Math.pow(windKmh, 0.16) + 0.3965 * tempC * Math.pow(windKmh, 0.16);
}

// Static temperature and wind speed
const temperature = 8; // °C
const windSpeed = 10; // km/h

// Wind chill calculation conditions
let windChillOutput;
if (temperature <= 10 && windSpeed > 4.8) {
    windChillOutput = Math.round(calculateWindChill(temperature, windSpeed)) + "°C";
} else {
    windChillOutput = "N/A";
}

// Display values in the HTML
document.getElementById("temp").textContent = temperature + "°C";
document.getElementById("wind-speed").textContent = windSpeed + " km/h";
document.getElementById("wind-chill").textContent = windChillOutput;

// Footer current year and last modified
document.getElementById("current-year").textContent = new Date().getFullYear();
document.getElementById("last-modified").textContent = document.lastModified;
