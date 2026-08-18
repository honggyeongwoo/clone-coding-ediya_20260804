// Ediya_Header_language.js


const languageBox = document.querySelector(".language-box");
const languageButton = document.querySelector(".language-button");

languageButton.addEventListener("click", function (event) {
  event.preventDefault();

  languageBox.classList.toggle("open");
});

const navItems = document.querySelectorAll(".nav-bar-left li");

navItems.forEach(function (item) {
  item.addEventListener("click", function () {

    // 모든 li에서 on 제거
    navItems.forEach(function (navItem) {
      navItem.classList.remove("on");
    });

    // 클릭한 li에만 on 추가
    item.classList.add("on");
  });
});