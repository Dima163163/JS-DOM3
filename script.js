'use strict';
const list = document.querySelector('.list');

//  Функция добавления элемента в список
const setStrToList = (str) => {
  const newStr = str.trim();
  if (newStr !== null && newStr !== 'del' && newStr !== '') {
    list.insertAdjacentHTML('beforeend', `<li class="list__item">
    ${newStr}</li>`);
  }
};

// Функция удаления последнего элемента из списка
const delStr = () => {
  const listItems = list.getElementsByTagName('li');
  const lastItem = listItems[listItems.length - 1];
  list.removeChild(lastItem);
};

// Функция отчистки списка
const clearList = () => {
  list.textContent = '';
};

// Бесконечный цикл
while (true) {
  const newStr = prompt('Введите строку для добавления в список: ');
  if (newStr === 'del') {
    delStr();
    break;
  }
  if (newStr === 'clear') {
    clearList();
    break;
  }
  if (newStr === null || newStr === 'exit') break;
  setStrToList(newStr);
}
