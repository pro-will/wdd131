const products = [
  {
    id: "product-name",
    name: "product-name",
    averagerating: 4.5
  },
  {
    id: "fc-2050",
    name: "rating filter",
    averagerating: 4.7
  },
  {
    id: "date-1000",
    name: "date filter",
    averagerating: 3.5
  },
  {
    id: "comments-3000",
    name: "comments",
    averagerating: 3.9
  },
  {
    id: "name-4000",
    name: "name",
    averagerating: 5.0
  }
];

//Add current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Add last modified date
document.getElementById("lastModified").textContent = document.lastModified;
