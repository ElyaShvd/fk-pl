const openModalButtons = document.querySelectorAll("#open-modal-btn");
const openModalButtons3 = document.querySelectorAll("#open-modal-btn3");
const closeModalButtons = document.querySelector(".close-button");
// const closeChooseModalButtons = document.querySelector('.close-button1');
const closeChooseModalButtons = document.getElementById("close-choose");
const overlay = document.getElementById("overlay");
const modal = document.getElementById("modal");
const modalChoose = document.getElementById("modal-choose");
const standardButton = document.getElementById("standard-button");
const premiumButton = document.getElementById("premium-button");
const smallButton = document.getElementById("small-button");
// const mediumButton = document.getElementById("medium-button");
const largeButton = document.getElementById("large-button");
// const zenButton = document.getElementById("zen-button");
const priceTag = document.getElementById("price-tag");
const image = document.getElementById("image");
const info = document.getElementById("info");
const standardButton2 = document.getElementById("standard-button2");
const premiumButton2 = document.getElementById("premium-button2");
const smallButton2 = document.getElementById("small-button2");
// const mediumButton2 = document.getElementById("medium-button2");
const largeButton2 = document.getElementById("large-button2");
// const zenButton2 = document.getElementById("zen-button2");
const priceTag2 = document.getElementById("price-tag2");
const image2 = document.getElementById("image2");
const info2 = document.getElementById("info-text");
const permButton = document.getElementById("perm_button");
const overlay2 = document.getElementById("overlay2");
overlay2.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal-active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});
let small = false;
// let medium = false;
let large = false;
// let zen = false;
let small2 = false;
// let medium2 = false;
let large2 = false;
// let zen2 = false;
let IsPremium = false;
let IsPremium2 = false;
let priceSmall = 7300;
// let priceMedium = 6000;
let priceLarge = 9300;
// let priceZen = 6850;
let priceSmall2 = 7000;
// let priceMedium2 = 8000;
let priceLarge2 = 9000;
// let priceZen2 = 8850;
let PremiumInfo = `
  <span class="my-class"> +  </span>
  <span class="my-class"> ⁃ Pomoc w znalezieniu lokalizacji </span>
  <span class="my-class"> ⁃ Lokalizacje pod klucz </span>
  <span class="my-class"> ⁃ Bezpłatna logistyka </span>
  <span class="my-class"> ⁃ Promotor </span>`;
let smallInfo = `
⁃ Korporacyjny design z indywidualnym podświetleniem LED 
⁃ Dostęp do bazy wiedzy
⁃ Narzędzia marketingowe 
⁃ Pełna lada samoobsługowa 
⁃ System Veiding 
⁃ Ekspres do kawy klasy premium od hiszpańskiego producenta Azkoyen 
⁃ Sygnowany wzór z podświetleniem
⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej 
⁃ Wsparcie 24/7 
⁃ Indywidualny organizer na syropy i materiały eksploatacyjne 
⁃ Stojak metalowy i plastikowy z podgrzewaną wodą 
⁃ System bezpieczeństwa Ajax 
⁃ Zamki elektroniczne 
⁃ Pomoc w promocji Twojego punktu sprzedaży 
⁃ Instalacja kawiarni i kompletna konfiguracja`;
// let mediumInfo = `⁃ Pomoc w znalezieniu lokalizacji
// ⁃ Korporacyjny design z indywidualnym podświetleniem LED
// ⁃ Dostęp do bazy wiedzy
// ⁃ Narzędzia marketingowe
// ⁃ Pełna lada samoobsługowa
// ⁃ System Veiding
// ⁃ Ekspres do kawy klasy premium od hiszpańskiego producenta Azkoyen
// ⁃ Sygnowany wzór z podświetleniem
// ⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej
// ⁃ Wsparcie 24/7
// ⁃ Indywidualny organizer na syropy i materiały eksploatacyjne
// ⁃ Stojak metalowy i plastikowy z podgrzewaną wodą
// ⁃ System bezpieczeństwa Ajax
// ⁃ Zamki elektroniczne
// ⁃ Pomoc w promocji Twojego punktu sprzedaży
// ⁃ Instalacja kawiarni i kompletna konfiguracja`;
let largeInfo = `
⁃ Korporacyjny design z indywidualnym podświetleniem LED 
⁃ Dostęp do bazy wiedzy
⁃ Narzędzia marketingowe 
⁃ Pełna lada samoobsługowa 
⁃ System Veiding 
⁃ Ekspres do kawy klasy premium od hiszpańskiego producenta Azkoyen 
⁃ Sygnowany wzór z podświetleniem
⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej 
⁃ Wsparcie 24/7 
⁃ Indywidualny organizer na syropy i materiały eksploatacyjne 
⁃ Stojak metalowy i plastikowy z podgrzewaną wodą 
⁃ System bezpieczeństwa Ajax 
⁃ Zamki elektroniczne 
⁃ Pomoc w promocji Twojego punktu sprzedaży 
⁃ Instalacja kawiarni i kompletna konfiguracja`;
// let zenInfo = `⁃ Pomoc w znalezieniu lokalizacji
// ⁃ Korporacyjny design z indywidualnym podświetleniem LED
// ⁃ Dostęp do bazy wiedzy
// ⁃ Narzędzia marketingowe
// ⁃ Pełna lada samoobsługowa
// ⁃ System Veiding
// <span class="my-class"> ⁃ Ekspres do kawy klasy premium hiszpańskiego producenta Azkoyen z opuszczanymi filiżankami i dozowaniem cukru </span>
// <span class="my-class"> ⁃ Osobisty akceptor monet </span>
// ⁃ Sygnowany wzór z podświetleniem
// ⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej
// ⁃ Wsparcie 24/7
// ⁃ Indywidualny organizer na syropy i materiały eksploatacyjne
// ⁃ Stojak metalowy i plastikowy z podgrzewaną wodą
// ⁃ System bezpieczeństwa Ajax
// ⁃ Zamki elektroniczne
// ⁃ Pomoc w promocji Twojego punktu sprzedaży
// ⁃ Instalacja kawiarni i kompletna konfiguracja`;

// Обработчики событий для кнопок
openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    modal.classList.add("modal-active");
    priceTag.textContent = "7300€";
    image.src = "img/s1-pl.png";
    small = true;
    info.innerHTML = `\n⁃ Допомога у пошуку локації 
    \n⁃ Фірмовий дизайн з індивідуальним LED підсвічуванням 
    \n⁃ Доступ до бази знань 
    \n⁃ Маркетингові інструменти 
    \n⁃ Повноцінна стійка самообслуговування 
    \n⁃ Veiding система 
    \n⁃ Кавомашина преміум класу від іспанського виробника Azkoyen 
    \n⁃ Фірмовий дизайн з підсвічуванням 
    \n⁃ Постачання всіх інгредієнтів за найнижчою ціною ринку 
    \n⁃ Підтримка 24/7 
    \n⁃ Індивідуальний органайзер для сиропів та розхідників 
    \n⁃ Металопластикова стійка з підігрівом води 
    \n⁃ Охоронна система Ajax 
    \n⁃ Електронні замки 
    \n⁃ Допомога у розкрутці вашої точки 
    \n⁃ Встановлення кавярні і повне налаштування`;
    info.innerHTML = largeInfo.replace(/\n/g, "<br>");
    standardButton.style.background =
      "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    smallButton.style.background =
      "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  });
});

openModalButtons3.forEach((button) => {
  button.addEventListener("click", () => {
    small2 = true;
    standardButton2.style.background =
      "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    smallButton2.style.background =
      "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
    modalChoose.classList.add("modal-active");
    priceTag2.textContent = "7300€";
    image2.src = "img/s1-pl.png";
    let testText = `
    ⁃ Korporacyjny design z indywidualnym podświetleniem LED
    ⁃ Dostęp do bazy wiedzy
    ⁃ Narzędzia marketingowe
    ⁃ Pełna lada samoobsługowa
    ⁃ System Veiding
    ⁃ Ekspres do kawy klasy premium od hiszpańskiego producenta Azkoyen
    ⁃ Sygnowany wzór z podświetleniem
    ⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej
    ⁃ Wsparcie 24/7
    ⁃ Indywidualny organizer na syropy i materiały eksploatacyjne
    ⁃ Stojak metalowy i plastikowy z podgrzewaną wodą
    ⁃ System bezpieczeństwa Ajax
    ⁃ Zamki elektroniczne
    ⁃ Pomoc w promocji Twojego punktu sprzedaży
    ⁃ Instalacja kawiarni i kompletna konfiguracja`;
    info2.innerHTML = testText.replace(/\n/g, "<br>");
  });
});

closeModalButtons.addEventListener("click", () => {
  // const modal = button.closest('.modal');

  closeModal(modal);
  closeModal(modalChoose);
});
// closeModalButtons.forEach(button => {
//   button.addEventListener('click', () => {
//     const modal = button.closest('.modal');
//     closeModal(modal);
//   });
// });
closeChooseModalButtons.addEventListener("click", () => {
  // const modal = button.closest('.modal');
  // closeModal(modal);
  medium = false;
  closeModal(modalChoose);
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal-active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

standardButton.addEventListener("click", () => {
  IsPremium = false;

  if (small == true) {
    priceTag.textContent = `${priceSmall}€`;
  }
  // if (medium == true) {
  //   priceTag.textContent = `${priceMedium}$`;
  // }
  if (large == true) {
    priceTag.textContent = `${priceLarge}€`;
  }
  // if (zen == true) {
  //   priceTag.textContent = `${priceZen}$`;
  // }
  standardButton.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  premiumButton.style.background = "";
  let testText = `
  ⁃ Korporacyjny design z indywidualnym podświetleniem LED 
  ⁃ Dostęp do bazy wiedzy
  ⁃ Narzędzia marketingowe 
  ⁃ Pełna lada samoobsługowa 
  ⁃ System Veiding 
  ⁃ Ekspres do kawy klasy premium od hiszpańskiego producenta Azkoyen 
  ⁃ Sygnowany wzór z podświetleniem
  ⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej 
  ⁃ Wsparcie 24/7 
  ⁃ Indywidualny organizer na syropy i materiały eksploatacyjne 
  ⁃ Stojak metalowy i plastikowy z podgrzewaną wodą 
  ⁃ System bezpieczeństwa Ajax 
  ⁃ Zamki elektroniczne 
  ⁃ Pomoc w promocji Twojego punktu sprzedaży 
  ⁃ Instalacja kawiarni i kompletna konfiguracja`;
  info.innerHTML = testText.replace(/\n/g, "<br>");
  // if (zen) {
  //   info.innerHTML = zenInfo.replace(/\n/g, "<br>");
  // }
});
standardButton2.addEventListener("click", () => {
  IsPremium2 = false;
  if (small2 == true) {
    priceTag2.textContent = `${priceSmall2}€`;
  }
  // if (medium2 == true) {
  //   priceTag2.textContent = `${priceMedium2}$`;
  // }
  if (large2 == true) {
    priceTag2.textContent = `${priceLarge2}€`;
  }
  // if (zen2 == true) {
  //   priceTag2.textContent = `${priceZen2}$`;
  // }
  standardButton2.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  premiumButton2.style.background = "";
  smallButton2.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  let testText = `
  ⁃ Korporacyjny design z indywidualnym podświetleniem LED 
  ⁃ Dostęp do bazy wiedzy
  ⁃ Narzędzia marketingowe 
  ⁃ Pełna lada samoobsługowa 
  ⁃ System Veiding 
  ⁃ Ekspres do kawy klasy premium od hiszpańskiego producenta Azkoyen 
  ⁃ Sygnowany wzór z podświetleniem
  ⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej 
  ⁃ Wsparcie 24/7 
  ⁃ Indywidualny organizer na syropy i materiały eksploatacyjne 
  ⁃ Stojak metalowy i plastikowy z podgrzewaną wodą 
  ⁃ System bezpieczeństwa Ajax 
  ⁃ Zamki elektroniczne 
  ⁃ Pomoc w promocji Twojego punktu sprzedaży 
  ⁃ Instalacja kawiarni i kompletna konfiguracja`;
  info2.innerHTML = testText.replace(/\n/g, "<br>");
  // if (zen2) {
  //   info2.innerHTML = zenInfo.replace(/\n/g, "<br>");
  // }
});
premiumButton.addEventListener("click", () => {
  IsPremium = true;
  if (medium == true) {
    priceTag.textContent = `6500€`;
  } else if (small == true) {
    priceTag.textContent = `${priceSmall + 400}€`;
  } else if (large == true) {
    priceTag.textContent = `${priceLarge + 400}€`;
  } else if (zen == true) {
    priceTag.textContent = `${priceZen + 400}€`;
  }
  let testText = `
  ⁃ Korporacyjny design z indywidualnym podświetleniem LED 
  ⁃ Dostęp do bazy wiedzy
  ⁃ Narzędzia marketingowe 
  ⁃ Pełna lada samoobsługowa 
  ⁃ System Veiding 
  ⁃ Ekspres do kawy klasy premium od hiszpańskiego producenta Azkoyen 
  ⁃ Sygnowany wzór z podświetleniem
  ⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej 
  ⁃ Wsparcie 24/7 
  ⁃ Indywidualny organizer na syropy i materiały eksploatacyjne 
  ⁃ Stojak metalowy i plastikowy z podgrzewaną wodą 
  ⁃ System bezpieczeństwa Ajax 
  ⁃ Zamki elektroniczne 
  ⁃ Pomoc w promocji Twojego punktu sprzedaży 
  ⁃ Instalacja kawiarni i kompletna konfiguracja`;
  let PremiumInfo = `
  <span class="my-class"> +  </span>
  <span class="my-class"> ⁃ Pomoc w znalezieniu lokalizacji </span>
  <span class="my-class"> ⁃ Lokalizacje pod klucz </span>
  <span class="my-class"> ⁃ Bezpłatna logistyka </span>
  <span class="my-class"> ⁃ Promotor </span>`;
  // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  standardButton.style.background = "";
  premiumButton.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  info.innerHTML =
    testText.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  if (zen) {
    info.innerHTML =
      zenInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  }
});
premiumButton2.addEventListener("click", () => {
  IsPremium2 = true;
  // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  // console.log("medium2", medium2);
  // console.log("s", small2);
  // console.log("l", large2);
  console.log(zen2);
  if (medium2 == true) {
    priceTag2.textContent = `${priceMedium2 + 400}€`;
  } else if (small2 == true) {
    priceTag2.textContent = `${priceSmall2 + 400}€`;
  } else if (large2 == true) {
    priceTag2.textContent = `${priceLarge2 + 400}€`;
  } else if (zen2 == true) {
    priceTag2.textContent = `${priceZen2 + 400}€`;
  }
  standardButton2.style.background = "";
  premiumButton2.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  let testText = `
  ⁃ Korporacyjny design z indywidualnym podświetleniem LED 
  ⁃ Dostęp do bazy wiedzy
  ⁃ Narzędzia marketingowe 
  ⁃ Pełna lada samoobsługowa 
  ⁃ System Veiding 
  ⁃ Ekspres do kawy klasy premium od hiszpańskiego producenta Azkoyen 
  ⁃ Sygnowany wzór z podświetleniem
  ⁃ Dostawa wszystkich komponentów po najniższej cenie rynkowej 
  ⁃ Wsparcie 24/7 
  ⁃ Indywidualny organizer na syropy i materiały eksploatacyjne 
  ⁃ Stojak metalowy i plastikowy z podgrzewaną wodą 
  ⁃ System bezpieczeństwa Ajax 
  ⁃ Zamki elektroniczne 
  ⁃ Pomoc w promocji Twojego punktu sprzedaży 
  ⁃ Instalacja kawiarni i kompletna konfiguracja`;
  let PremiumInfo = `
  <span class="my-class"> +  </span>
  <span class="my-class"> ⁃ Pomoc w znalezieniu lokalizacji </span>
  <span class="my-class"> ⁃ Lokalizacje pod klucz </span>
  <span class="my-class"> ⁃ Bezpłatna logistyka </span>
  <span class="my-class"> ⁃ Promotor </span>`;
  info2.innerHTML =
    testText.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  if (zen2) {
    info2.innerHTML =
      zenInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  }
});
largeButton2.addEventListener("click", LargeClick2);
// zenButton2.addEventListener("click", ZenClick2);
smallButton.addEventListener("click", () => {
  smallButton.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  // mediumButton.style.background = "";
  largeButton.style.background = "";
  // zenButton.style.background = "";
  // medium = false;
  small = true;
  large = false;
  // zen = false;
  image.src = "img/s1-pl.png";
  if (IsPremium) {
    priceTag.textContent = `${priceSmall + 400}€`;
    info.innerHTML =
      smallInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag.textContent = `${priceSmall}€`;
    info.innerHTML = smallInfo.replace(/\n/g, "<br>");
  }
});
// mediumButton.addEventListener("click", () => {
//   image.src = "img/2size.png";
//   medium = true;
//   small = false;
//   large = false;
//   zen = false;
//   smallButton.style.background = "";
//   mediumButton.style.background =
//     "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
//   largeButton.style.background = "";
//   smallButton.style.background = "";
//   zenButton.style.background = "";
//   if (IsPremium) {
//     priceTag.textContent = `${priceMedium + 500}$`;
//     info.innerHTML =
//       mediumInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
//   } else {
//     priceTag.textContent = `${priceMedium}$`;

//     info.innerHTML = mediumInfo.replace(/\n/g, "<br>");
//   }
// });
largeButton.addEventListener("click", () => {
  image.src = "img/s5-pl.png";
  large = true;
  small = false;
  medium = false;
  zen = false;
  smallButton.style.background = "";
  // mediumButton.style.background = "";
  largeButton.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  // zenButton.style.background = "";

  // if (!zen) {
  //   if (IsPremium) {
  //     info.innerHTML =
  //       largeInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  //   } else {
  //     info.innerHTML = largeInfo.replace(/\n/g, "<br>");
  //   }
  // }

  if (IsPremium) {
    priceTag.textContent = `${priceLarge + 400}€`;
    info.innerHTML =
      largeInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag.textContent = `${priceLarge}€`;

    info.innerHTML = largeInfo.replace(/\n/g, "<br>");
  }
});
// zenButton.addEventListener("click", () => {
//   image.src = "img/zeo.png";
//   zen = true;
//   small = false;
//   medium = false;
//   large = false;
//   smallButton.style.background = "";
//   mediumButton.style.background = "";
//   largeButton.style.background = "";
//   zenButton.style.background =
//     "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
//   if (IsPremium) {
//     priceTag.textContent = `${priceZen + 500}$`;
//     info.innerHTML =
//       zenInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
//   } else {
//     priceTag.textContent = `${priceZen}$`;

//     info.innerHTML = zenInfo.replace(/\n/g, "<br>");
//   }
// });
smallButton2.addEventListener("click", () => {
  let PremiumInfo = `
  <span class="my-class"> +  </span>
  <span class="my-class"> ⁃ Pomoc w znalezieniu lokalizacji </span>
  <span class="my-class"> ⁃ Lokalizacje pod klucz </span>
  <span class="my-class"> ⁃ Bezpłatna logistyka </span>
  <span class="my-class"> ⁃ Promotor </span>`;
  image2.src = "img/s1-pl.png";
  smallButton2.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  // mediumButton2.style.background = "";
  largeButton2.style.background = "";
  // zenButton2.style.background = "";
  // medium2 = false;
  small2 = true;
  // zen2 = false;
  large2 = false;

  if (IsPremium2) {
    priceTag2.textContent = `${priceSmall2 + 400}€`;
    info2.innerHTML =
      smallInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag2.textContent = `${priceSmall2}€`;

    info2.innerHTML = smallInfo.replace(/\n/g, "<br>");
  }
  if (!zen2 && IsPremium2) {
    info2.innerHTML =
      smallInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  }
  // standardButton2.addEventListener("click", () => {
  //   IsPremium2 = false;
  //   SmallClick2();
  // });
  // premiumButton2.addEventListener("click", () => {
  //   IsPremium2 = true;
  //   // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  //   SmallClick2();
  // });
});
// mediumButton2.addEventListener("click", () => {
//   let PremiumInfo = `
//   <span class="my-class"> +  </span>
//   <span class="my-class"> ⁃Lokalizacje pod klucz </span>
//   <span class="my-class"> ⁃ Bezpłatna logistyka </span>
//   <span class="my-class"> ⁃ Promotor </span>`;
//   image2.src = "img/2size.png";
//   smallButton2.style.background = "";
//   mediumButton2.style.background =
//     "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
//   largeButton2.style.background = "";
//   zenButton2.style.background = "";
//   medium2 = true;
//   small2 = false;
//   zen2 = false;
//   large2 = false;

//   if (!zen2) {
//     if (IsPremium2) {
//       info2.innerHTML =
//         mediumInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
//     } else {
//       info2.innerHTML = mediumInfo.replace(/\n/g, "<br>");
//     }
//   }
//   if (IsPremium2) {
//     priceTag2.textContent = `${priceMedium2 + 500}$`;
//     // info2.innerHTML = mediumInfo + PremiumInfo.replace(/\n/g, "<br>");
//   } else {
//     priceTag2.textContent = `${priceMedium2}$`;

//   }
// });
largeButton2.addEventListener("click", () => {
  let PremiumInfo = `
  <span class="my-class"> +  </span>
  <span class="my-class"> ⁃ Pomoc w znalezieniu lokalizacji </span>
  <span class="my-class"> ⁃ Lokalizacje pod klucz </span>
  <span class="my-class"> ⁃ Bezpłatna logistyka </span>
  <span class="my-class"> ⁃ Promotor </span>`;
  smallButton2.style.background = "";
  smallButton2.style.background = "";
  // mediumButton2.style.background = "";
  largeButton2.style.background =
    "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
  // zenButton2.style.background = "";
  image2.src = "img/s5-pl.png";
  medium2 = false;
  // zen2 = false;
  small2 = false;
  large2 = true;

  // if (!zen2) {
  //   if (IsPremium2) {
  //     info2.innerHTML =
  //       largeInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  //   } else {
  //     info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  //   }
  // }

  if (IsPremium2 && zen2 == false) {
    priceTag2.textContent = `${priceLarge2 + 400}€`;
    // info2.innerHTML = largeInfo + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag2.textContent = `${priceLarge2}€`;

    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  }

  standardButton2.addEventListener("click", () => {
    IsPremium2 = false;
    LargeClick();
  });
  premiumButton2.addEventListener("click", () => {
    IsPremium2 = true;
    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
    LargeClick();
  });
});

// zenButton2.addEventListener("click", () => {
//   smallButton2.style.background = "";
//   smallButton2.style.background = "";
//   mediumButton2.style.background = "";
//   largeButton2.style.background = "";
//   zenButton2.style.background =
//     "linear-gradient(0deg, #FF8801 0%, #FF5014 100%)";
//   image2.src = "img/zeo.png";
//   medium2 = false;
//   small2 = false;
//   large2 = false;
//   zen2 = true;
//   if (IsPremium2) {
//     priceTag2.textContent = `${zenPrice2 + 500}$`;
//     // info2.innerHTML = largeInfo + PremiumInfo.replace(/\n/g, "<br>");
//   } else {
//     priceTag2.textContent = `${zenPrice2}$`;

//     // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
//   }
//   standardButton2.addEventListener("click", () => {
//     IsPremium2 = false;

//     LargeClick();
//   });
//   premiumButton2.addEventListener("click", () => {
//     IsPremium2 = true;
//     // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
//     LargeClick();
//   });
//   info2.innerHTML = zenInfo.replace(/\n/g, "<br>");
// });

permButton.addEventListener("click", () => {
  closeModal(modal);
  closeModal(modalChoose);
});

// Функции открытия и закрытия модального окна
function openModal(modalTarget) {
  const modal = document.querySelector(modalTarget);
  console.log(modalTarget);
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("modal-active");
  premiumButton.style.background = "";
  premiumButton2.style.background = "";
  // mediumButton2.style.background = "";
  largeButton2.style.background = "";
  // mediumButton.style.background = "";
  largeButton.style.background = "";
  // zenButton.style.background = "";
  // zenButton2.style.background = "";
  medium = false;
}

overlay2.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal-active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

// Функции открытия и закрытия модального окна
function openModal(modalTarget) {
  const modal = document.querySelector(modalTarget);
  console.log(modalTarget);
  modal.classList.add("active");
  overlay2.classList.add("active");
}

function closeModal(modal) {
  modal.classList.remove("modal-active");
  modal.classList.remove("active");
  overlay2.classList.remove("active");
  premiumButton.style.background = "";
  premiumButton2.style.background = "";
  // mediumButton2.style.background = "";
  largeButton2.style.background = "";
  // mediumButton.style.background = "";
  largeButton.style.background = "";
  // zenButton.style.background = "";
  zenButton2.style.background = "";
  medium = false;
  small = false;
  large = false;
  zen = false;
  medium2 = false;
  small2 = false;
  large2 = false;
  zen2 = false;
  IsPremium2 = false;
  IsPremium = false;
}

// info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
function SmallClick() {
  image.src = "img/s1-pl.png";
  if (IsPremium) {
    priceTag.textContent = `${priceSmall + 400}€`;
    info.innerHTML =
      smallInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag.textContent = `${priceSmall}€`;

    info.innerHTML = smallInfo.replace(/\n/g, "<br>");
  }
}
// function MediumClick() {
//   image.src = "img/2size.png";
//   consolr.log("sdsdsd");
//   if (IsPremium) {
//     priceTag.textContent = `${priceMedium + 500}$`;
//     info.innerHTML =
//       mediumInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");

//     console.log(info.innerHTML);
//   } else {
//     priceTag.textContent = `${priceMedium}$`;

//     info.innerHTML = mediumInfo.replace(/\n/g, "<br>");
//   }
// }
function LargeClick() {
  image.src = "img/s5-pl.png";
  if (IsPremium) {
    priceTag.textContent = `${priceLarge + 400}€`;
    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
    info.innerHTML =
      largeInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag.textContent = `${priceLarge}€`;

    info.innerHTML = largeInfo.replace(/\n/g, "<br>");
    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  }
}
// function ZenClick() {
//   image.src = "img/zeo.png";
//   zen = true;
//   if (IsPremium) {
//     priceTag.textContent = `${priceZen + 500}$`;

//     info.innerHTML =
//       zenInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");
//   } else {
//     priceTag.textContent = `${priceZen}$`;

//     info.innerHTML = zenInfo.replace(/\n/g, "<br>");

//   }
// }
function SmallClick2() {
  zen2 = false;
  image2.src = "img/1size.png";
  if (IsPremium2) {
    priceTag2.textContent = `${priceSmall2 + 400}€`;
    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
    // info2.innerHTML = smallInfo + PremiumInfo.replace(/\n/g, "<br>");
  } else {
    priceTag2.textContent = `${priceSmall2}€`;

    // info2.innerHTML = smallInfo.replace(/\n/g, "<br>");
  }
}
// function MediumClick2() {
//   image2.src = "img/2size.png";
//   zen2 = false;
//   if (IsPremium2) {
//     priceTag2.textContent = `${priceMedium2 + 500}$`;

//   } else {
//     priceTag2.textContent = `${priceMedium2}$`;

//   }
// }
function LargeClick2() {
  image2.src = "img/s5-pl.png";
  zen2 = false;
  if (IsPremium2) {
    priceTag2.textContent = `${priceLarge2 + 400}€`;
    // info2.innerHTML = largeInfo + PremiumInfo.replace(/\n/g, "<br>");
    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  } else {
    priceTag2.textContent = `${priceLarge2}€`;

    // info2.innerHTML = largeInfo.replace(/\n/g, "<br>");
  }
}
// function ZenClick2() {
//   image2.src = "img/zeo.png";
//   let PremiumInfo = `
//   <span class="my-class"> +  </span>
//   <span class="my-class"> ⁃ Lokalizacje pod klucz </span>
//   <span class="my-class"> ⁃ Bezpłatna logistyka </span>
//   <span class="my-class"> ⁃ Promotor </span>`;
//   zen2 = true;
//   info2.innerHTML = zenInfo.replace(/\n/g, "<br>");
//   console.log(IsPremium2);
//   if (IsPremium2) {
//     priceTag2.textContent = `${priceZen2 + 500}$`;
//     info2.innerHTML =
//       zenInfo.replace(/\n/g, "<br>") + PremiumInfo.replace(/\n/g, "<br>");

//   } else {
//     priceTag2.textContent = `${priceZen2}$`;

//   }
// }
