document.addEventListener("DOMContentLoaded", function () {
    var swiper = new Swiper(".swiper", {
        loop: true, // Sløjfe slideren
        autoplay: {
            delay: 5000, // Skift hvert 3. sekund
            disableOnInteraction: false, // Fortsæt autoplay efter interaktion
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
        //autoHeight: true, // Tilpasser højden til billedet

    });
});
