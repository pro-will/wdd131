// Get the current year
var currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = "© " + currentYear;

// Get the last modified date of the document
var lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;