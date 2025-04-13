const steps = document.querySelectorAll(".form-step");
const nextBtns = document.querySelectorAll(".next");
const prevBtns = document.querySelectorAll(".prev");

let currentStep = 0;

nextBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
  });
});

prevBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    steps[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
  });
});

document.getElementById("multiStepForm").addEventListener("submit", (e) => {
  e.preventDefault();
  alert("Form Submitted Successfully!");
});
