const upBtn = document.querySelector('.up-button');
const downBtn = document.querySelector('.down-button');
const sidebar = document.querySelector('.sidebar');
const container = document.querySelector('.container');
const mainSlide = document.querySelector('.main-slide');
const slidesCount = mainSlide.querySelectorAll('div').length; // получаем массив div = число (length)

let activeSlideIndex = 0; // показ активного слайда
sidebar.style.top = `-${(slidesCount - 1) * 100}vh`; //получаем нужную картинку

upBtn.addEventListener('click', () => {
    changeSlide('up');
});
downBtn.addEventListener('click', () => {
    changeSlide('down');
});

document.addEventListener('keydown', event => {
    if (event.key === 'ArrowUp') {
        changeSlide('up');
    } else if (event.key === 'ArrowDown') {
        changeSlide('down');
    }
});

// механизм изменения слайда
function changeSlide(direction) {
    if (direction === 'up') {
        activeSlideIndex++; //если нажали на кнопку вверх, то увеличиваем число актиного слайда на 1
        if (activeSlideIndex === slidesCount) {
            activeSlideIndex = 0; //если число активного слайда равняется концу, то обнуляем - наичнаем показывать сначала
        }
    } else if (direction === 'down') { //кнопка вниз
        activeSlideIndex--;
        if (activeSlideIndex < 0) { // сразу нажали на кнопку вниз
            activeSlideIndex = slidesCount - 1;
        }
    }

    const height = container.clientHeight;

    mainSlide.style.transform = `translateY(-${activeSlideIndex * height}px)`;     //двигаем по оси Y, знак минус - направление куда будем подниматься или спускаться
    sidebar.style.transform = `translateY(${activeSlideIndex * height}px)`;
}