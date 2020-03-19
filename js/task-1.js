const categoriesRef = document.querySelector('#categories');
const itemsRef = document.querySelectorAll('.item');
console.log(`В списке: ${categoriesRef.childElementCount} категории.`);

itemsRef.forEach(item => {
  console.log(
    `Категория: ${item.firstElementChild.textContent}. Количество элементов: ${item.lastElementChild.childElementCount}.`,
  );
});
