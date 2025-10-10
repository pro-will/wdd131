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
      