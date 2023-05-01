const name1 = document.getElementById("name");
const phone = document.getElementById("phone");
const city = document.getElementById("city");

const nameForm = document.getElementById("nameForm");
const phoneForm = document.getElementById("phonenumberForm");
const cityForm = document.getElementById("cityForm");

const button = document.getElementById("formButton");

const buttonForm = document.getElementById("form_submit");

nameForm.value = name1.value;
phoneForm.value = phone.value;
cityForm.value = city.value;

button.addEventListener("click", function (e) {
  e.preventDefault();
  buttonForm.click();
});
