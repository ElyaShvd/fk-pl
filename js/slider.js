// Получаем элементы слайдера и слайдов
const slider = document.querySelector(".slider");

// Устанавливаем начальное значение и общее количество слайдов
let currentSlide = 0;

// Функция для переключения на следующий слайд
function nextSlide() {
  currentSlide = currentSlide + 1;
  slider.style.transform = `translateY(-${currentSlide * 100}%)`;
  if (currentSlide == 3) {
    currentSlide = -1;
  }
}

// Устанавливаем интервал для автоматической смены слайдов каждые 4 секунды
setInterval(() => {
  nextSlide();
}, 3000);
