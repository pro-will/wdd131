const products = [
  {
    id: "product-name",
    name: "Product Name",
    averagerating: 4.5
  },
  {
    id: "rating-filter",
    name: "Overall Rating",
    averagerating: 4.7
  },
  {
    id: "date",
    name: "Date of Installation",
    averagerating: 3.5
  },
  {
    id: "comments",
    name: "Written Review",
    averagerating: 3.9
  },
  {
    id: "name",
    name: "User Name",
    averagerating: 5.0
  }
];

   // Add current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

  // Add last modified date
document.getElementById("lastModified").textContent = document.lastModified;

