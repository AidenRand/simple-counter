const increaseBtn = document.querySelector(".increaseBtn");
const decreaseBtn = document.querySelector(".decreaseBtn");
const resetBtn = document.querySelector(".resetBtn");
let number = document.querySelector(".number");
let counter = 0;

// Button that increments the counter up
const countUp = () => {
  increaseBtn.addEventListener("click", () => {
    counter += 1;
    number.textContent = counter;
  });
};
countUp();
