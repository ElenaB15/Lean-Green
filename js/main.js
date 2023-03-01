let accordions = document.querySelectorAll(".accordion");

accordions.forEach((acco) => {
  acco.onclick = () => {
    accordions.forEach((accoSub) => {
      accoSub.classList.remove("active");
    });
    acco.classList.add("active");

    console.log(acco);
  };
});
// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function () {
//     this.classList.toggle("active");
//     var panel = document.getElementsByClassName(".accordion-container");
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }
const scrollBtn = document.getElementById("safe-btn-new");
const targetSection = document.getElementById("scroll-page");

scrollBtn.addEventListener("click", () => {
  targetSection.scrollIntoView({ behavior: "smooth" });
});
