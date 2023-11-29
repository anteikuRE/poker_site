const Cards = document.querySelectorAll(".features__card");
const Questions = document.querySelectorAll(".questions__section__question");
console.log(Cards);
// Cards.addEventListener("click",
Cards.forEach((el) => {
  el.addEventListener("click", function () {
    el.style.height = "150px";
    el.querySelector(".features__card-p").style.opacity = 1;
    el.querySelector(".features__card-p").style.height = "100%";
  });
});
Questions.forEach((el) => {
  el.addEventListener("click", function () {
    if (el.style.height === "70px") {
      setTimeout(() => {
        el.style.height = "30px";
      }, 100);
      el.getElementsByTagName("p")[0].style.opacity = 0;
      console.log(el);
    } else {
      el.style.height = "70px";

      el.getElementsByTagName("p")[0].style.opacity = 1;
    }
  });
});
