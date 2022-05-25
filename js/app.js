document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  
  const form = document.querySelector('#new-item-form');
  const categoryDefault = document.querySelector('#category>option[value=""]');
  categoryDefault.textContent = 'Select document type';
  const readingList = document.querySelector('#reading-list');

  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const documentWrapper = document.createElement('li');
    readingList.appendChild(documentWrapper);
    const submitResults = document.createElement('ul');
    readingList.appendChild(submitResults);
    
    const bookTitle = document.createElement('li');
    bookTitle.textContent = event.target.title.value;
    submitResults.appendChild(bookTitle);
    
    const bookAuthor = document.createElement('li');
    bookAuthor.textContent = event.target.author.value
    submitResults.appendChild(bookAuthor);
    
    const bookCategory = document.createElement('li');
    bookCategory.textContent = event.target.category.value
    submitResults.appendChild(bookCategory);
    
    form.reset();
  };
  
  form.addEventListener('submit', handleFormSubmit);

  const body = document.querySelector('body');
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Clear reading list';
  body.appendChild(deleteButton);

  const handleDeleteAll = () => {
    while (readingList.lastChild) {
      readingList.removeChild(readingList.lastChild);
    }
  };

  deleteButton.addEventListener('click', handleDeleteAll);

});
