// const project = document.querySelectorAll(".project-container");

// if (project.length > 3) {
//   project.style.display = "none";
// } else {
//   console.log("Error");
// }

// document.querySelector(".loadmore").addEventListener("click", function () {
//   const projectContainer = document.querySelectorAll(".project-container");
//   console.log(projectContainer);
//   for (let i = 0; i < projectContainer.length; i++) {
//     console.log(projectContainer);
//     if (projectContainer.length > 3) {
//       projectContainer.style.display = "none";
//     } else {
//       console.log("Error");
//     }
//   }
// });
const slide = document.querySelectorAll(".project-container ");
const nextSlide = document.querySelector(".nextslide");
const prevSlide = document.querySelector(".prevslide");
let currentSlide = 0;
const maxSlide = slide.length;
let slideIndex;

const goToSlide = function (e) {
  slide.forEach((currentValue, i) => {
    currentValue.style.transform = `translateX(${-108 * e}%)`;
  });
};
// -435

// Next Slide
nextSlide.addEventListener("click", function (e) {
  if (currentSlide === maxSlide - 2) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
});

//Prev Slide
prevSlide.addEventListener("click", function (e) {
  if (currentSlide === 0) {
    currentSlide = maxSlide - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
});
