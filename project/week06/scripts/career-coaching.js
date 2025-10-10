 // --- DÉMONSTRATION : JavaScript Arrays et Array Methods ---
        // Structure de données simple utilisée pour la démo de Conditional Branching
        const careerPaths = [
            { level: 'student', suggestion: 'Optimisation de CV et Préparation aux entretiens', link: 'services.html#cv' },
            { level: 'junior', suggestion: 'Développement de compétences clés et Réseautage', link: 'services.html#networking' },
            { level: 'mid', suggestion: 'Planification stratégique de carrière et Mentorat', link: 'services.html#mentoring' },
            { level: 'senior', suggestion: 'Transition de carrière ou Leadership Coaching', link: 'services.html#leadership' }
        ];

        function handleCareerQuiz(event) {
            event.preventDefault();

            const level = document.getElementById('experience-level').value;
            const resultBox = document.getElementById('quiz-result');
            const resultText = resultBox.querySelector('.result-text');
            const resultLink = document.getElementById('quiz-link');
            
            // --- DÉMONSTRATION : JavaScript Conditional Branching (if/else) ---
            // Recherche du chemin correspondant dans le tableau (Array Methods: find)
            const path = careerPaths.find(p => p.level === level);
            
            let suggestion = "Veuillez sélectionner un niveau d'expérience valide.";
            let destinationLink = "#";
            let showLink = false;

            if (path) {
                // Utilisation de la logique conditionnelle pour déterminer l'affichage
                suggestion = `Pour votre niveau (${level.toUpperCase()}), nous vous recommandons : ${path.suggestion}.`;
                destinationLink = path.link;
                showLink = true;
            } 
            
            // Affichage des résultats
            resultText.textContent = suggestion;
            resultLink.href = destinationLink;
            resultLink.style.display = showLink ? 'inline-block' : 'none';
            resultBox.style.display = 'block';
        }

        // --- DÉMONSTRATION : JavaScript localStorage (Sauvegarde d'état) ---
        function loadContactFormState() {
            // Charge les données sauvegardées
            const savedName = localStorage.getItem('contact_form_name');
            const savedEmail = localStorage.getItem('contact_form_email');
            
            if (savedName) document.getElementById('nom').value = savedName;
            if (savedEmail) document.getElementById('email').value = savedEmail;
        }

        function saveContactFormState() {
            // Sauvegarde les données à chaque changement
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
    });


// Formulaire de contact
            const contactForm = document.getElementById('contact-form');
            const statusMessage = document.getElementById('status-message');

            contactForm.addEventListener('submit', function(event) {
                event.preventDefault();

                const formData = new FormData(contactForm);
                const soumission = {
                    nom: formData.get('nom'),
                    email: formData.get('email'),
                    message: formData.get('message'),
                    date: new Date().toLocaleString('fr-FR')
                };

                // Conditionnel pour la validation de l'email
                if (!soumission.email.includes('@')) {
                    statusMessage.textContent = 'Veuillez entrer une adresse email valide.';
                    statusMessage.className = 'message-status error';
                    statusMessage.style.display = 'block';
                    return;
                }

                // Utilisation d'objets, de tableaux et de méthodes de tableau
                let soumissions = JSON.parse(localStorage.getItem('soumissions_contact')) || [];
                soumissions.push(soumission);
                localStorage.setItem('soumissions_contact', JSON.stringify(soumissions));

                // Utilisation de littéraux de gabarit pour la sortie
                statusMessage.textContent = `Merci pour votre message, ${soumission.nom}! Nous vous répondrons bientôt.`;
                statusMessage.className = 'message-status success';
                statusMessage.style.display = 'block';

                contactForm.reset();
                console.log('Soumissions stockées :', soumissions);
        });
      