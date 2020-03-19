const counterRef = document.querySelector('#counter');
const counterValueRef = document.querySelector('#value');

counterRef.addEventListener('click', handleButtonClick);

const counter = {
  counterValue: 0,
  increment() {
    this.counterValue += 1;
  },
  decrement() {
    if (this.counterValue > 0) this.counterValue -= 1;
  },
};

function handleButtonClick(event) {
  const action = event.target.getAttribute('data-action');
  propertyIsset(action);
}

function propertyIsset(action) {
  if (counter.hasOwnProperty(action)) {
    counter[action]();
    counterValueRef.textContent = counter.counterValue;
  }
}
