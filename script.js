// déclaration des variables
const closeBtn = document.getElementById('close-btn');
const fullImg = document.getElementById('lightbox-image');
const lightBox = document.querySelector('.lightbox');
const thumbImg = document.querySelectorAll('.gallery-item')

// Event sur le close btn pour fermer lightbox
closeBtn.addEventListener(('click'), () => {
  lightBox.style.display = "none";
});
