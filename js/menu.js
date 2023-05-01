// const hamb = document.querySelector("#hamb");
// const popup = document.querySelector("#popup");
// const menu = document.querySelector("#menu").cloneNode(1);
// const body = document.body;

// hamb.addEventListener("click", hambHandler);

// function hambHandler(e) {
//   e.preventDefault();
//   popup.classList.toggle("open");
//   hamb.classList.toggle("active");
//   body.classList.toggle("noscroll");
//   renderPopup();
// }

// function renderPopup() {
//   popup.appendChild(menu);
// }

const hamb = document.querySelector("#hamb");
const popup = document.querySelector("#popup");
const menu = document.querySelector("#menu").cloneNode(true);
const body = document.body;

hamb.addEventListener("click", hambHandler);

function hambHandler(e) {
  e.preventDefault();
  popup.classList.toggle("open");
  hamb.classList.toggle("active");
  body.classList.toggle("noscroll");
  renderPopup();
}

function renderPopup() {
  popup.appendChild(menu);
  addLinkListeners();
}

function addLinkListeners() {
  const links = menu.querySelectorAll("a");
  for (let i = 0; i < links.length; i++) {
    links[i].addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(
        this.getAttribute("data-scroll-to")
      );
      target.scrollIntoView({ behavior: "smooth" });
      popup.classList.remove("open");
      hamb.classList.remove("active");
      body.classList.remove("noscroll");
    });
  }
}
