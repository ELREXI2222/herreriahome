//region logica del carrusel de imagenes
/* <!-- carousel-container --> */
let ima = "images/img-herreria/hereria-pergola.jpg";
let ima2 = "images/img-herreria/herreria-escalera-amarilla-escalones-negros.jpg";
let ima3 = "images/img-herreria/herreria-escalera-blanca-anclada-a-pared.jpg";
let ima4 = "images/img-herreria/herreria-estructura-metalica-que-en-la-ventana.jpg";
let ima5 = "images/img-herreria/herreria-estructura-para-escalera-gris.jpg";
let ima6 = "images/img-herreria/herreria-tuberia-azul.jpg";
let ima7 = "images/img-herreria/herreria-tubos.jpg";




const images = [
  ima, // Usamos la variable directamente
  ima2,
  ima3,ima4,ima5,ima6,ima7
];

    const carouselImages = document.querySelector('.carousel-images');
    const indicatorsContainer = document.querySelector('.indicators');
    let currentIndex = 0;

    // Cargar imágenes dinámicamente
    function loadImages() {
      images.forEach((image, index) => {
        const img = document.createElement('img');
        img.src = image;
        carouselImages.appendChild(img);

        // Crear indicadores
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        if (index === 0) indicator.classList.add('active');
        indicator.addEventListener('click', () => goToImage(index));
        indicatorsContainer.appendChild(indicator);
      });
    }

    // Cambiar imagen
    function updateCarousel() {
      const width = carouselImages.clientWidth;
      carouselImages.style.transform = `translateX(-${currentIndex * width}px)`;
      updateIndicators();
    }

    // Actualizar indicadores
    function updateIndicators() {
      const indicators = document.querySelectorAll('.indicator');
      indicators.forEach((indicator, index) => {
        if (index === currentIndex) {
          indicator.classList.add('active');
        } else {
          indicator.classList.remove('active');
        }
      });
    }

    // Ir a la siguiente imagen
    function nextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      updateCarousel();
    }

    // Ir a la imagen anterior
    function prevImage() {
      currentIndex = (currentIndex - 1 + images.length) % images.length;
      updateCarousel();
    }

    // Ir a una imagen específica
    function goToImage(index) {
      currentIndex = index;
      updateCarousel();
    }

    // Soporte para gestos táctiles
    let startX = 0;
    carouselImages.addEventListener('touchstart', (e) => {
      startX = e.touches[0].clientX;
    });

    carouselImages.addEventListener('touchend', (e) => {
      const endX = e.changedTouches[0].clientX;
      if (startX > endX + 50) {
        nextImage();
      } else if (startX < endX - 50) {
        prevImage();
      }
    });

    // Listeners para flechas
    document.querySelector('.arrow-right').addEventListener('click', nextImage);
    document.querySelector('.arrow-left').addEventListener('click', prevImage);

    // Inicializar
    loadImages();

    //endregion end logica del carrusel de imagenes