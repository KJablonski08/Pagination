/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

document.addEventListener('DOMContentLoaded', (e) => {
  
   //array of student list item elements 
   let studentListItems = document.getElementsByClassName('student-item cf'); 

   //number of items to show on each “page” - for this project - 10
   const itemsPerPage = 10;

   //`showPage` function to hide all of the items in the list except for number of items required in itemsPerPage function 

   function showPage(list, page) {
      let startIndex = (page * itemsPerPage) - itemsPerPage;
      let endIndex = page * itemsPerPage;

      //display any list item with an index >= to start index variable and < end index variable
      for (let i = 0; i < list.length; i++) {
         if ( i >= startIndex && i < endIndex) {
            list[i].style.display = '';
         } else {
            list[i].style.display = 'none';
         }
      }
   }
   
   //function used in appendPageLinks and AppendSearchBar to create elements and append to element
   function appendElement(elementName, newElementName) {
      const element = document.createElement(newElementName);
      return elementName.appendChild(element);
    }

   //'appendPageLinks' generate, append, and add functionality to the pagination buttons at bottom of the page

   function appendPageLinks(list) {

      //create and append the DOM elements for the pagination links
      const page = document.querySelector('.page')

      const div = appendElement(page, 'div')
      div.className = 'pagination';
      const ul = appendElement(div, 'ul')
      
      
      //add link for each li item in ul 
      for (p = 0; p < (list.length / itemsPerPage); p++) {

         const li = appendElement(ul, 'li')

         //each LI element contains a link element 
         const a = appendElement(li, 'a')

         //an href attribute of # to each link
         a.href = '#';

         //added class of 'active' to first 'page'
         if (p === 0) {
            a.className = 'active';
         }

         //text set to the page number each link will show. First link is 1. Second link is 2. And so on...
         a.textContent = p + 1;
      }

      const links = document.querySelectorAll('a');

      //event listener for each link element
      ul.addEventListener('click', (e) => {
         //active class name should be removed from all pagination links
         for (let i = 0; i < links.length; i++) {
            links[i].className = '';
         }

         //active class name should be added to the link that was just clicked.
         e.target.className = 'active';
         
         //showPage function to be called, passing in as arguments, the global variable for the list items, and the page number that should be shown.
         showPage(list, e.target.textContent);
      })
   }

   function appendSearchBar(list) {
      // dynamically create and append the DOM elements for the Search Bar
      const pageHeader = document.querySelector('.page-header');

      const div = appendElement(pageHeader, 'div');
      div.className = 'student-search';

      const input = appendElement(div, 'input');
      input.placeholder = 'Search for students...';

      const button = appendElement(div, 'button');
      button.textContent = 'Search';

      button.addEventListener('click', (e) => {
         e.preventDefault();

         //resets array back to zero items 
         studentListItems = [];

         //if search has been run - resets error message for zero search results found 
         if (document.querySelector('.not-found')) {
            document.querySelector('.not-found').remove();
         }
         
         const searchInput = input.value;
         input.value = ''; 
         
         for (let i = 0; i < list.length; i++) {
            const name = list[i].querySelector('h3').textContent;
            if (name.includes(searchInput)) {
               list[i].style.display = '';
               studentListItems.push(list[i]);
            } else {
               list[i].style.display = 'none';
            }
         }

         //if no search results are found - appends error message to document
         if (studentListItems.length === 0) {
            const error = document.querySelector('.student-list')
            const errorMessage = appendElement(error, 'p');
            errorMessage.className = "not-found"
            errorMessage.textContent = `No students matching the name '${searchInput}'. Please try another name`;
         }

         showPage(studentListItems, 1)

         //resets pagination links 
         document.querySelector('.pagination').remove();

         appendPageLinks(studentListItems);
      });
      
   } 

   appendPageLinks(studentListItems);
   appendSearchBar(studentListItems);
   showPage(studentListItems, 1);

});