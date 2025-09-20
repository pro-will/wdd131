//Add current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Add last modified date
document.getElementById("lastModified").textContent = document.lastModified;

//Example: Calculate wind chill (basic formula)
function calculateWindChill(tempC, windKmh) {
  if (tempC <= 10 && windKmh > 4.8) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(1);
  } else {
    return tempC;
  }
}

// Update weather info (demo with static values)
const temp = 28; // °C
const wind = 14; // km/h
document.getElementById("wind-chill").textContent = `${calculateWindChill(temp, wind)}°C`;
    