// Product Array
const products = [
  { id: "p1", name: "Laptop" },
  { id: "p2", name: "Smartphone" },
  { id: "p3", name: "Tablet" },
  { id: "p4", name: "Headphones" },
  { id: "p5", name: "Smartwatch" }
];

// Populate select options
document.addEventListener("DOMContentLoaded", () => {
  const productSelect = document.getElementById("product");
  if (productSelect) {
    products.forEach(product => {
      const option = document.createElement("option");
      option.value = product.id;
      option.textContent = product.name;
      productSelect.appendChild(option);
    });
  }

  // Add current year in footer
  document.getElementById("year").textContent = new Date().getFullYear();

  // Add last modified date
  document.getElementById("lastModified").textContent = document.lastModified;

  // Review counter on review.html
  if (window.location.pathname.includes("review.html")) {
    let count = localStorage.getItem("reviewCount") || 0;
    count++;
    localStorage.setItem("reviewCount", count);
    document.getElementById("reviewCount").textContent = count;
  }
});
