const bookList = document.querySelector('#book-list ul');
const { forms } = document;
const addBook = forms['add-book'];
const searchBooks = forms['search-books'];

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

const hideBox = addBook.querySelector('#hide');
hideBox.addEventListener('change', () => {
  if (hideBox.checked) {
    bookList.style.display = 'none';
  } else {
    bookList.style.display = 'block';
  }
});

const searchBox = searchBooks.querySelector('input');
const books = bookList.querySelectorAll('li');
searchBox.addEventListener('keyup', (event) => {
  const term = event.target.value.toLowerCase();
  books.forEach(book => {
    const name = book.querySelector('.name').textContent;
    if (!name.toLowerCase().includes(term)) {
      book.style.display = 'none';
    } else {
      book.style.display = 'block';
    }
  });
});

const tabs = document.querySelector('.tabs');
const panels = document.getElementsByClassName('panel');
tabs.addEventListener('click', (event) => {
  if (event.target.tagName === 'LI') {
    const selected = panels[event.target.textContent.toLowerCase()];
    Array.from(panels).forEach(panel => {
      if (panel === selected) {
        panel.classList.add('active');
      } else {
        panel.classList.remove('active');
      }
    });
    tabs.querySelectorAll('li').forEach(tab => {
      if (tab === event.target) {
        tab.classList.add('active');
      } else {
        tab.classList.remove('active');
      }
    });
  }
});
