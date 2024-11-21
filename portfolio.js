let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

let navLinks = document.querySelectorAll('header nav a');
let section = document.querySelectorAll('section');

navLinks.forEach(link => {
    link.onclick = () => {
        menuIcon.classList.remove('bx-x'); // Réinitialise l'icône du menu
        navbar.classList.remove('active'); // Réinitialise l'état actif de la barre de navigation
    }
});

window.onscroll = () => {
    section.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 100;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');


        if(top>= offset && top < offset + height) {


            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            sec.classList.add('show-animate');
        }
        else {
            sec.classList.remove('show-animate');
        }
    });

    let header = document.querySelector('header');

    header.classList.toggle('sticky', window.scrollY > 100);

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');

    let footer = document.querySelector('footer');

    footer.classList.toggle('show-animate', this.innerHeight + this.scrollY >= document.scrollingElement.scrollHeight);


}

/*function playVideo(videoSrc) {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  modal.style.display = 'flex'; // Affiche la modal
  video.src = videoSrc; // Charge la source vidéo
  video.load(); // Joue la vidéo automatiquement
}


// Fonction pour fermer la modal
function closeVideo() {
  const modal = document.getElementById('videoModal');
  const video = document.getElementById('modalVideo');
  modal.style.display = 'none'; // Masque la modal
  video.pause(); // Met en pause la vidéo
  video.src = ''; // Réinitialise la source pour éviter les problèmes de mémoire
}


// Gestion de la fermeture en cliquant à l'extérieur de la modal
window.addEventListener('click', (e) => {
  const modal = document.getElementById('videoModal');
  if (e.target === modal) {
      closeVideo();
  }
});*/

document.addEventListener('DOMContentLoaded', () => {
    const openModalBtn = document.getElementById('openModalBtn');
    const modal = document.getElementById('modal');
    const closeModalBtn = document.getElementById('closeModalBtn');
  
    // Ouvrir la modal
    openModalBtn.addEventListener('click', () => {
      modal.style.display = 'flex';
    });
  
    // Fermer la modal
    closeModalBtn.addEventListener('click', () => {
      modal.style.display = 'none';
    });
  
    // Fermer la modal en cliquant en dehors de la modal-content
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.style.display = 'none';
      }
    });
  });

  // Bouton et modal 2
  const openModalBtn2 = document.getElementById('openModalBtn2');
  const modal2 = document.getElementById('modal2');
  const closeModalBtn2 = document.getElementById('closeModalBtn2');

  openModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'flex';
  });

  closeModalBtn2.addEventListener('click', () => {
    modal2.style.display = 'none';
  });

  modal2.addEventListener('click', (e) => {
    if (e.target === modal2) {
      modal2.style.display = 'none';
    }
  });

  // Bouton et modal 3
  const openModalBtn3 = document.getElementById('openModalBtn3');
  const modal3 = document.getElementById('modal3');
  const closeModalBtn3 = document.getElementById('closeModalBtn3');

  openModalBtn3.addEventListener('click', () => {
    modal3.style.display = 'flex';
  });

  closeModalBtn3.addEventListener('click', () => {
    modal3.style.display = 'none';
  });

  modal3.addEventListener('click', (e) => {
    if (e.target === modal3) {
      modal3.style.display = 'none';
    }
  });

  // Bouton et modal 4
  const openModalBtn4 = document.getElementById('openModalBtn4');
  const modal4 = document.getElementById('modal4');
  const closeModalBtn4 = document.getElementById('closeModalBtn4');

  openModalBtn4.addEventListener('click', () => {
    modal4.style.display = 'flex';
  });

  closeModalBtn4.addEventListener('click', () => {
    modal4.style.display = 'none';
  });

  modal4.addEventListener('click', (e) => {
    if (e.target === modal4) {
      modal4.style.display = 'none';
    }
  });

  
