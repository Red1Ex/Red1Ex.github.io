document.addEventListener('DOMContentLoaded', function () {
    const slider = document.querySelector('.property__list');
    let isDown = false;
    let scrollX;
    let scrollLeft;

    slider.addEventListener('touchstart', (e) => {
        isDown = true;
        scrollX = e.touches[0].pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;

        document.body.style.userSelect = 'none';
    });

    slider.addEventListener('touchend', () => {
        isDown = false;
        document.body.style.userSelect = '';
    });

    slider.addEventListener('touchmove', (e) => {
        if (!isDown) return;
        const x = e.touches[0].pageX - slider.offsetLeft;
        const walk = (x - scrollX) * 3; // scroll-fast
        slider.scrollLeft = scrollLeft - walk;
    });
});