document.querySelectorAll('.project-link').forEach(link => {
    link.addEventListener('click', async function(event) {
        event.preventDefault();

        // Récupère l'image et le fichier texte associés au projet
        let imageSrc = this.getAttribute('data-image');
        let textFile = this.getAttribute('data-description');
        let titleText = this.getAttribute('data-title');
        document.getElementById('popup-title').textContent  = titleText;

        // Affiche l'image dans la popup
        document.getElementById('popup-image').src = imageSrc;


        // Essaie de charger le fichier texte pour la description
        try {
            let response = await fetch(textFile);
            let text = await response.text();
            document.getElementById('popup-description').innerText = text;
        } catch (error) {
            document.getElementById('popup-description').innerText = "Description non disponible.";
        }

        // Affiche la popup
        document.getElementById('popup').style.display = 'flex';
    });
});

// Ferme la popup si l'utilisateur clique en dehors
document.getElementById('popup').addEventListener('click', function(event) {
    if (event.target === this) {
        this.style.display = 'none';
    }
});