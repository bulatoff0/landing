let offset = 0; //смещение от левого края
const sliderLine = document.querySelector('.slider-line');

document.querySelector('.switch-btn1').addEventListener('click', function () {
    offset = offset + 267;
    if (offset > 801) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px'
})

document.querySelector('.switch-btn2').addEventListener('click', function () {
    offset = offset - 267;
    if (offset < 0) {
        offset = 801;
    }
    sliderLine.style.left = -offset + 'px'
})