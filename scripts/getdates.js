
// This function runs when the page has fully loaded.
document.addEventListener('DOMContentLoaded', () => {

    // Get the current year for the copyright.
    const currentYear = new Date().getFullYear();

    // Select the first paragraph in the footer to display the copyright year.
    // Assuming the footer structure is <p>Copyright...</p>
    const copyrightParagraph = document.querySelector('footer p:first-of-type');

    if (copyrightParagraph) {
        copyrightParagraph.innerHTML = `&copy; ${currentYear} My Website`;
    }

    // Get the date the document was last modified.
    // The document.lastModified property returns a string.
    const lastModifiedDate = document.lastModified;

    // Select the second paragraph in the footer to display the last modified date.
    // Assuming the footer structure is <p>...last modified...</p>
    const lastModifiedParagraph = document.querySelector('footer p:last-of-type');

    if (lastModifiedParagraph) {
        lastModifiedParagraph.innerHTML = `Last Modified: ${lastModifiedDate}`;
    }
});
