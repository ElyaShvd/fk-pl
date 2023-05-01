function updateCafes() {
  let cafes = document.getElementById("cafes").value;
  document.getElementById("cafesValue").innerHTML = cafes;
  let test2 = document.getElementById("cafes");
  let test = document.getElementById("cafesValue");

  setBubble(test2, test);
}

function updateDrinks() {
  let drinks = document.getElementById("drinks").value;
  document.getElementById("drinksValue").innerHTML = drinks;

  let test2 = document.getElementById("drinks");
  let test = document.getElementById("drinksValue");

  setBubble(test2, test);
}

function updateMonths() {
  let months = document.getElementById("months").value;
  document.getElementById("monthsValue").innerHTML = months;

  let test2 = document.getElementById("months");
  let test = document.getElementById("monthsValue");
  setBubble(test2, test);
}

function calculateProfit() {
  let cafes = document.getElementById("cafes").value;
  let drinks = document.getElementById("drinks").value;
  let months = document.getElementById("months").value;
  let allprofit = cafes * drinks * 7 * months * 30;

  document.getElementById("expense1").value = 275 * months * cafes;
  document.getElementById("expense2").value = 30 * months * cafes;
  document.getElementById("expense3").value = 135 * months * cafes;
  let expense1 = 275 * months * cafes;
  let expense2 = 30 * months * cafes;
  let expense3 = 135 * months * cafes;
  let profit = allprofit - allprofit * 0.386 - expense1 - expense2 - expense3;

  document.getElementById("expense").value = Math.round(allprofit * 0.386, 0);
  document.getElementById("profit").value = Math.round(profit, 0);
}

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.3}px))`;
}
