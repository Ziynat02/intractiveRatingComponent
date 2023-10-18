let btn = document.querySelector("#btn");
btn.onclick = function () {
  container.classList.toggle("hide-show");
  container2.classList.toggle("hide-show");
};
let rating = document.querySelector("#rating");
let rates = document.querySelectorAll(".btn-nums");

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML;
  });
});
