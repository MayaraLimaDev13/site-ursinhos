// Obter o elemento do carrossel
var carousel = document.getElementById('carouselExampleCaptions');

// Reproduzir o carrossel
carousel.carousel('cycle');

// Pausar o carrossel
carousel.carousel('pause');


setInterval(function() {
    carousel.carousel('next');
  }, 3000);