let counterValue = 0;

const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector('[data-action="increment"]');
const counter = document.querySelector('#value');

decrementButton.addEventListener('click', () => {
  counterValue--;
  counter.textContent = counterValue;
});

incrementButton.addEventListener('click', () => {
  counterValue++;
  counter.textContent = counterValue;
});