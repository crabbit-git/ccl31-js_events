document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');
  
  const readingListUL = document.querySelector("#reading-list");
  const readingListDiv = document.createElement("div");
  readingListUL.appendChild(readingListDiv);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    const submitResults = document.createElement("ul");
    readingListDiv.appendChild(submitResults);

    const bookTitle = document.createElement("li");
    bookTitle.textContent = event.target.title.value;
    submitResults.appendChild(bookTitle);
    
    const bookAuthor = document.createElement("li");
    bookAuthor.textContent = event.target.author.value
    submitResults.appendChild(bookAuthor);
    
    const bookCategory = document.createElement("li");
    bookCategory.textContent = event.target.category.value
    submitResults.appendChild(bookCategory);
    
  };

  const newForm = document.querySelector("#new-item-form");
  newForm.addEventListener("submit", handleFormSubmit);

  
});

// display items below on submit
// form fields reset to empty
// then format result into div