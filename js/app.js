document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const form = document.querySelector("#new-item-form");

  form.addEventListener("submit", (event)=>{
    event.preventDefault();


    const title = event.target.title.value;
    const author = event.target.author.value;
    const category = event.target.category.value;

    // console.dir()

    const newBook = document.createElement("div");
    const newBookTitle = document.createElement("div");
    const newBookAuthor = document.createElement("div");
    const newBookCategory = document.createElement("div");

    newBookTitle.textContent = title;
    newBookAuthor.textContent = author;
    newBookCategory.textContent = category;

    newBook.appendChild(newBookTitle);
    newBook.appendChild(newBookAuthor);
    newBook.appendChild(newBookCategory);

    newBookTitle.classList.add("book-title");
    newBookAuthor.classList.add("book-author");
    newBookCategory.classList.add("new-category");

    newBook.classList.add("new-item");

    const readingList = document.querySelector("#reading-list");
    readingList.appendChild(newBook);


    form.reset();
  });

  const deleteAll







})
