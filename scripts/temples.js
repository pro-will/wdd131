// Footer Year + Last Modified
    document.getElementById("year").textContent = new Date().getFullYear();
    document.getElementById("lastModified").textContent = document.lastModified;

    // Hamburger Menu Toggle
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.querySelector(".nav-links");

    hamburger.addEventListener("click", () => {
      navLinks.classList.toggle("show");

      // Toggle icon ☰ ↔ ✖
      if (hamburger.textContent === "✖") {
        hamburger.textContent = "☰";
      } else {
        hamburger.textContent = "✖";
      }
    });