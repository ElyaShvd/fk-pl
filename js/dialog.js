// Получаем кнопку отправки формы
var submitBtn = document.getElementById("submit-btn");

// Получаем модальное окно подтверждения
var confirmationDialog = document.getElementById("confirmation-dialog");

// Получаем элемент закрытия модального окна
var closeBtn = confirmationDialog.querySelector(".close");

// Открытие модального окна при нажатии на кнопку
submitBtn.addEventListener("click", function() {
  confirmationDialog.style.display = "block";
});

// Закрытие модального окна при нажатии на крестик
closeBtn.addEventListener("click", function() {
  confirmationDialog.style.display = "none";
});

// Закрытие модального окна при клике за его пределами
window.addEventListener("click", function(event) {
  if (event.target == confirmationDialog) {
    confirmationDialog.style.display = "none";
  }
});