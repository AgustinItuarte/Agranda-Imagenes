const imagenGrande = document.querySelector('#imagenGrande')
const imgs = document.querySelectorAll('.imgChicas')

imgs.forEach(img => img.addEventListener('click', () => {
    imagenGrande.src = img.src;
}))