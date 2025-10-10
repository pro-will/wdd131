// --- DEMO: JavaScript Arrays and Array Methods ---
// Simple data structure used for the Conditional Branching demo
const careerPaths = [
    { level: 'student', suggestion: 'Resume Optimization and Interview Preparation', link: 'services.html#cv' },
    { level: 'junior', suggestion: 'Key Skills Development and Networking', link: 'services.html#networking' },
    { level: 'mid', suggestion: 'Strategic Career Planning and Mentoring', link: 'services.html#mentoring' },
    { level: 'senior', suggestion: 'Career Transition or Leadership Coaching', link: 'services.html#leadership' }
];

function handleCareerQuiz(event) {
    event.preventDefault();

    const level = document.getElementById('experience-level').value;
    const resultBox = document.getElementById('quiz-result');
    const resultText = resultBox.querySelector('.result-text');
    const resultLink = document.getElementById('quiz-link');
    
    // --- DEMO: JavaScript Conditional Branching (if/else) ---
    // Find the matching path in the array (Array Methods: find)
    const path = careerPaths.find(p => p.level === level);
    
    let suggestion = "Please select a valid experience level.";
    let destinationLink = "#";
    let showLink = false;

    if (path) {
        // Use conditional logic to determine display
        suggestion = `For your level (${level.toUpperCase()}), we recommend: ${path.suggestion}.`;
        destinationLink = path.link;
        showLink = true;
    } 
    
    // Display results
    resultText.textContent = suggestion;
    resultLink.href = destinationLink;
    resultLink.style.display = showLink ? 'inline-block' : 'none';
    resultBox.style.display = 'block';
}

// --- DEMO: JavaScript localStorage (State Persistence) ---
function loadContactFormState() {
    // Load saved data
    const savedName = localStorage.getItem('contact_form_name');
    const savedEmail = localStorage.getItem('contact_form_email');
    
    if (savedName) document.getElementById('nom').value = savedName;
    if (savedEmail) document.getElementById('email').value = savedEmail;
}

function saveContactFormState() {
    // Save data on each change
    const nameInput = document.getElementById('nom');
    const emailInput = document.getElementById('email');
    
    if (nameInput) localStorage.setItem('contact_form_name', nameInput.value);
    if (emailInput) localStorage.setItem('contact_form_email', emailInput.value);
}

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

    // Career Quiz Form (Conditional Branching + Array Methods)
    const careerQuizForm = document.getElementById('career-quiz-form');
    if (careerQuizForm) {
        careerQuizForm.addEventListener('submit', handleCareerQuiz);
    }

    // Load form state (localStorage Demo)
    loadContactFormState();
    
    const contactForm = document.getElementById('contact-form');
    const statusMessage = document.getElementById('status-message');

    if (contactForm) {
        // Save state on input (Input Event)
        contactForm.querySelectorAll('input, textarea').forEach(input => {
            input.addEventListener('input', saveContactFormState);
        });

        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            const formData = new FormData(contactForm);
            const submission = {
                name: formData.get('nom'),
                email: formData.get('email'),
                message: formData.get('message'),
                date: new Date().toLocaleString('us-US')
            };

            // Conditional email validation
            if (!submission.email.includes('@')) {
                statusMessage.textContent = 'Please enter a valid email address.';
                statusMessage.className = 'message-status error';
                statusMessage.style.display = 'block';
                return;
            }

            // Using objects, arrays, and array methods
            let submissions = JSON.parse(localStorage.getItem('soumissions_contact')) || [];
            submissions.push(submission);
            localStorage.setItem('soumissions_contact', JSON.stringify(submissions));

            // After successful submission, clear form state in localStorage
            localStorage.removeItem('contact_form_name');
            localStorage.removeItem('contact_form_email');

            // Using template literals for output
            statusMessage.textContent = `Thank you for your message, ${submission.name}! We will respond soon.`;
            statusMessage.className = 'message-status success';
            statusMessage.style.display = 'block';

            contactForm.reset();
            console.log('Stored submissions:', submissions);
        });
    }
});
