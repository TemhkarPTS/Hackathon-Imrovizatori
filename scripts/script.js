function goToSlide(slideIndex) {
    currentSlide = slideIndex;
    const slideOffset = -slideIndex * 100;
    carousel.style.transform = `translateX(${slideOffset}%)`;
}


function openPopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'block';
}

function closePopup() {
    var popup = document.getElementById('popup');
    popup.style.display = 'none';
}