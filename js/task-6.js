const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', handleInputBlur);
inputRef.addEventListener('focus', handleInputFocus);

function handleInputBlur(event) {
  Number(event.target.getAttribute('data-length')) === event.target.value.length
    ? inputRef.classList.add('valid')
    : inputRef.classList.add('invalid');
}
function handleInputFocus(event) {
  inputRef.classList.remove('invalid', 'valid');
}
