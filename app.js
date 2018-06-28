const bookList = document.querySelector('#book-list ul');
const { forms } = document;
const addBook = forms['add-book'];
const hideBox = addBook.querySelector('#hide');

bookList.addEventListener('click', (event) => {
  if (event.target.classList.contains('delete')) {
    bookList.removeChild(event.target.parentElement);
  }
});

addBook.addEventListener('submit', (event) => {
  event.preventDefault();
  const { value } = addBook.querySelector('input[type="text"]');
  const book = document.createElement('li');
  const bookName = document.createElement('span');
  const deleteButton = document.createElement('span');
  bookName.classList.add('name');
  deleteButton.classList.add('delete');
  bookName.textContent = value;
  deleteButton.textContent = 'delete';
  book.appendChild(bookName);
  book.appendChild(deleteButton);
  bookList.appendChild(book);
});

hideBox.addEventListener('change', () => {
  if (hideBox.checked) {
    bookList.style.display = 'none';
  } else {
    bookList.style.display = 'initial';
  }
});
