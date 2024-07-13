document.addEventListener('DOMContentLoaded', () => {
    const prevButton = document.querySelector('.review-carousel__control--prev');
    const nextButton = document.querySelector('.review-carousel__control--next');
    const items = document.querySelectorAll('.review-carousel__item');
    let itemsPerPage = window.innerWidth <= 430 ? 1 : 3;
    let currentIndex = 0;

    function updateCarousel() {
        items.forEach((item, index) => {
            item.classList.toggle('review-carousel__item--visible', index >= currentIndex && index < currentIndex + itemsPerPage);
        });

        prevButton.disabled = currentIndex === 0;
        nextButton.disabled = currentIndex >= items.length - itemsPerPage;
    }

    function checkWindowSize() {
        itemsPerPage = window.innerWidth <= 430 ? 1 : 3;
        currentIndex = 0;
        updateCarousel();
    }

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextButton.addEventListener('click', () => {
        if (currentIndex < items.length - itemsPerPage) {
            currentIndex++;
            updateCarousel();
        }
    });

    window.addEventListener('resize', checkWindowSize);
    updateCarousel();
});
