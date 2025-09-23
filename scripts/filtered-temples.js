// Get the current year
var currentYear = new Date().getFullYear();
document.getElementById("copyright").textContent = "© " + currentYear;

// Get the last modified date of the document
var lastModified = document.lastModified;
document.getElementById("lastModified").textContent = "Last Modified: " + lastModified;

const temples = [
    {
        Templename: "Kinshasa Democratic Republic of Congo",
        Location: "Kinshasa, DR Congo",
        Dedicated: "April 14, 2019",
        Area: "5 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/kinshasa-democratic-republic-of-the-congo-temple/kinshasa-democratic-republic-of-the-congo-temple-3533-main.jpg"
    
    },
    {
        Templename: "Bangkok Thailand",
        Location: "Bangkok, Thailand",
        Dedicated: "October 22, 2023",
        Area: "1.77 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/bangkok-thailand-temple/bangkok-thailand-temple-3533-main.jpg"
    },
    {
        Templename: "Johannesburg South Africa",
        Location: "Johannesburg, South Africa",
        Dedicated: "August 24-25, 1985",
        Area: "1 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/johannesburg-south-africa-temple/johannesburg-south-africa-temple-3533-main.jpg"
    },
    {
        Templename: "West Jordan Utah",
        Location: "West Jordan, Utah",
        Dedicated: "October 9, 1983",
        Area: "16 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/west-jordan-utah-temple/west-jordan-utah-temple-3533-main.jpg"
    },
    {
        Templename: "Bakersfield California USA",
        Location: "Bakersfield, California, USA",
        Dedicated: "November 29, 2015",
        Area: "13.07 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/bakersfield-california-temple/bakersfield-california-temple-3533-main.jpg"
    },
    {
        Templename: "Frankfurt Germany",
        Location: "Frankfurt, Germany",
        Dedicated: "August 28-30, 1987",
        Area: "5.6 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/frankfurt-germany-temple/frankfurt-germany-temple-3533-main.jpg"
    },
    {
        Templename: "Manhattan New York",
        Location: "Manhattan, New York USA",
        Dedicated: "Jun 13, 2004",
        Area: "0.3 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/manhattan-new-york-temple/manhattan-new-york-temple-40080-main.jpg"
    },
    {
        Templename: "Córdoba Argentina", 
        Location: "Córdoba, Argentina",
        Dedicated: "May 17, 2015",
        Area: "5.18 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/cordoba-argentina-temple/cordoba-argentina-temple-3533-main.jpg"
    },
    {
        Templename: "Durban South Africa Temple",
        Location: "Durban, South Africa",
        Dedicated: "October 16, 2011",
        Area: "5.5 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/durban-south-africa-temple/durban-south-africa-temple-7936-main.jpg"
    },
    {
        Templename: "Rio de Janeiro Brazil Temple",
        Location: "Rio de Janeiro, Brazil",
        Dedicated: "May 22, 2022",
        Area: "5 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/rio-de-janeiro-brazil-temple/rio-de-janeiro-brazil-temple-8167-main.jpg"
    },
    {
        Templename: "Cobán Guatemala Temple",
        Location: "Cobán, Guatemala",
        Dedicated: "June 9, 2024",
        Area: "5 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/coban-guatemala-temple/coban-guatemala-temple-46348-main.jpg"
    },
    {
        Templename: "Ephraim Utah Temple",
        Location: "Ephraim, Utah",
        Dedicated: "August 27, 2022",
        Area: "9.16 acres",
        ImageURL: "https://churchofjesuschristtemples.org/assets/img/temples/ephraim-utah-temple/ephraim-utah-temple-3533-main.jpg"
    }
]