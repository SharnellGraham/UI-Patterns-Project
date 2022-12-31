const tabBtn = document.querySelectorAll(".tab__btn");
const tabContents = document.querySelectorAll(".tab__item");

tabBtn.forEach(function(element) {
   element.addEventListener("click", openTabs);
});

