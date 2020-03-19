const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', handleInput);

function handleInput() {
  textRef.style.fontSize = inputRef.value + 'px';
}

const setAttrInput = () => {
  inputRef.setAttribute('min', 16);
  inputRef.setAttribute('value', 16);
  inputRef.setAttribute('max', 48);
  inputRef.setAttribute('step', 1);
};
const setInlineStyle = () => {
  textRef.style.fontSize = inputRef.getAttribute('min') + 'px';
};
setAttrInput();
setInlineStyle();
