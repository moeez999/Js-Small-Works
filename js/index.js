let revealBtn = document.querySelectorAll(".reveal-content");
function revealContent(e) {
  let element = e.currentTarget;

  x = element.closest(".content-container");
  let answer = x.querySelector(".answer");

  //   let elementID = element.getAttribute("data-toggle");
  //   let toggleElement = document.getElementById(elementID);
  if (answer.classList.contains("hidden-content")) {
    answer.classList.remove("hidden-content");
    answer.classList.remove("hidden-content");
  } else {
    answer.classList.add("hidden-content");
  }
}
revealBtn.forEach((element) => {
  element.addEventListener("click", revealContent);
});
