// document.addEventListener('DOMContentLoaded', function() {
//   var video = document.getElementById('myVideo');
//   video.play();
// });

// const swiper = new Swiper('.swiper', {
//     direction: 'horizontal', 
//     loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: '.swiper-button-next',
//         prevEl: '.swiper-button-prev',
//     },
//     scrollbar: {
//         el: '.swiper-scrollbar',
//     },
// });

function gantiGambar(newImageUrl) {
    var gambar = document.getElementById('gambar');

    gambar.style.opacity = 0;

    setTimeout(function() {
        gambar.src = newImageUrl;
        gambar.style.opacity = 1;
    }, 500);
}