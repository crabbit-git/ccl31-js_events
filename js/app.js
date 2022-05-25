document.addEventListener('DOMContentLoaded', () => {
  // console.log('JavaScript loaded');
  
  const form = document.querySelector('#new-item-form');
  const categoryDefault = document.querySelector('#category>option[value=""]');
  categoryDefault.textContent = 'Select document type';
  const readingList = document.querySelector('#reading-list');
  
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const newDocument = document.createElement('li');
    readingList.appendChild(newDocument);
    const documentProperties = document.createElement('ul');
    documentProperties.classList.add('document');
    readingList.appendChild(documentProperties);
    
    const documentTitle = document.createElement('li');
    documentTitle.classList.add('document-title');
    documentTitle.textContent = event.target.title.value;
    documentProperties.appendChild(documentTitle);
    
    const documentAuthor = document.createElement('li');
    documentAuthor.classList.add('document-author');
    documentAuthor.textContent = event.target.author.value
    documentProperties.appendChild(documentAuthor);
    
    const documentCategory = document.createElement('li');
    documentCategory.classList.add('document-category');
    documentCategory.textContent = event.target.category.value
    documentProperties.appendChild(documentCategory);
    
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
