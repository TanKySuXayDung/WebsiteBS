document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.carousel').forEach(carousel => {
    const track = carousel.querySelector('.carousel-track');
    const pages = Array.from(carousel.querySelectorAll('.carousel-page'));
    const prevBtn = carousel.querySelector('.nav.prev');
    const nextBtn = carousel.querySelector('.nav.next');

    let currentPage = 0;
    const totalPages = pages.length;

    function updateNav() {
      track.style.transform = `translateX(-${currentPage * 100}%)`;
      prevBtn.disabled = currentPage === 0;
      nextBtn.disabled = currentPage === totalPages - 1;
    }

    prevBtn.addEventListener('click', () => {
      if (currentPage > 0) {
        currentPage--;
        updateNav();
      }
    });

    nextBtn.addEventListener('click', () => {
      if (currentPage < totalPages - 1) {
        currentPage++;
        updateNav();
      }
    });

    updateNav();
  });
});
