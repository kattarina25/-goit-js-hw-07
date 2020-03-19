const nameInputRef = document.querySelector('#name-input');
const nameOutputRef = document.querySelector('#name-output');

nameInputRef.addEventListener('input', handleInput);

function handleInput(event) {
  event.target.value.length === 0
    ? (nameOutputRef.textContent = 'незнакомец')
    : (nameOutputRef.textContent = event.target.value);
}
