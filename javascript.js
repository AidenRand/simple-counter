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

// Button that increments the counter down
const countDown = () => {
  decreaseBtn.addEventListener("click", () => {
    counter -= 1;
    number.textContent = counter;
  });
};
countDown();

// button that resets the counter
const resetCounter = () => {
  resetBtn.addEventListener("click", () => {
    counter = 0;
    number.textContent = counter;
  });
};
resetCounter();
