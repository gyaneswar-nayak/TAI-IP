document.addEventListener('DOMContentLoaded', () => {
    const items = document.querySelectorAll('.slider .item');
    const nextButton = document.querySelector('.next');
    const prevButton = document.querySelector('.prev');
    let currentIndex = 0;

    function showItem(index) {
        items.forEach((item, i) => {
            item.style.display = i === index ? 'block' : 'none';
        });
    }

    function nextItem() {
        currentIndex = (currentIndex + 1) % items.length;
        showItem(currentIndex);
    }

    function prevItem() {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        showItem(currentIndex);
    }

    nextButton.addEventListener('click', nextItem);
    prevButton.addEventListener('click', prevItem);

    // Initialize the slider by showing the first item
    showItem(currentIndex);
});