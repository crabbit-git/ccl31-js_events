document.addEventListener('DOMContentLoaded', () => {

  // Make the default Category selection in the form say something different:
  const categoryDefault = document.querySelector('#category>option[value=""]');
  categoryDefault.textContent = 'Select document type';

  const form = document.querySelector('#new-item-form');
  
  const formatNewDocument = (form) => {
    const newDocument = document.createElement('li');
    newDocument.classList.add('document');
    const documentProperties = document.createElement('ul');
    documentProperties.classList.add('document-properties');
    newDocument.appendChild(documentProperties);
    
    const documentTitle = document.createElement('li');
    documentTitle.classList.add('document-title');
    documentTitle.textContent = form.title.value;
    documentProperties.appendChild(documentTitle);
    
    const documentAuthor = document.createElement('li');
    documentAuthor.classList.add('document-author');
    documentAuthor.textContent = form.author.value
    documentProperties.appendChild(documentAuthor);
    
    const documentCategory = document.createElement('li');
    documentCategory.classList.add('document-category');
    documentCategory.textContent = form.category.value
    documentProperties.appendChild(documentCategory);

    return newDocument;
  };

  const readingList = document.querySelector('#reading-list');

  const handleFormSubmit = (event) => {
    event.preventDefault();
    readingList.appendChild(
      formatNewDocument(event.target)
      );
      event.target.reset();
  };

  // Add the form's "save" button to a "button" class...
  const saveButton = document.querySelector('input[type="submit"]');
  saveButton.classList.add('button');
  // ... and change the first letter to uppercase:
  saveButton.value = 'Save';
  // Submit form when Save is clicked:
  form.addEventListener('submit', handleFormSubmit);

  // Add a "Clear reading list" button:
  const deleteButton = document.createElement('button');
  deleteButton.classList.add('button');
  deleteButton.textContent = 'Clear reading list';
  document.querySelector('body').appendChild(deleteButton);

  const handleDeleteAll = () => {
    while (readingList.lastChild) {
      readingList.removeChild(readingList.lastChild);
    }
  };
  
  deleteButton.addEventListener('click', handleDeleteAll);

});
