document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".carousel-item");
    let currentSlide = 0;
  
    function showSlide(index) {
      slides.forEach((slide, i) => {
        if (i === index) {
          slide.classList.add('active');
        } else {
          slide.classList.remove('active');
        }
      });
    }
  
    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  
    function startCarousel() {
      setInterval(nextSlide, 3000); // Adjust the interval for carousel rotation
    }
  
    // Show the initial slide
    showSlide(currentSlide);
  
    // Start the carousel
    startCarousel();
  });
  