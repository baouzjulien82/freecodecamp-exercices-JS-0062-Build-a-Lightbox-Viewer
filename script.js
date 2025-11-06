// déclaration des variables
const closeBtn = document.getElementById('close-btn');
const fullImg = document.getElementById('lightbox-image');
const lightBox = document.querySelector('.lightbox');
const thumbImg = document.querySelectorAll('.gallery-item')

// Event sur le close btn pour fermer lightbox
closeBtn.addEventListener(('click'), () => {
  lightBox.style.display = "none";
});

// Event sur lightbox pour fermer lightbox au click
lightBox.addEventListener(('click'), () => {
  lightBox.style.display = "none";
});

// Event sur les thumbImg
thumbImg.forEach(img => {
  img.addEventListener('click', () => {
    fullImg.src = img.src.replace('-thumbnail', '');
    lightBox.style.display = 'flex';
  });
});
