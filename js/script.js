/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

document.addEventListener('DOMContentLoaded', (e) => {
  
   //stores the student list item elements
   const studentListItems = document.getElementsByClassName('student-item cf'); 

   //stores the number of items to show on each “page” - for this project - 10
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
   
   //'appendPageLinks' generate, append, and add functionality to the pagination buttons at bottom of the page

   function appendPageLinks(list) {

      //create and append the DOM elements for the pagination links
      const div = document.querySelector('.page')
         .appendChild(document.createElement('div'))
      div.className = 'pagination';

      const ul = div.appendChild(document.createElement('ul'));
      
      //add link for each li item in ul 
      for (p = 0; p < (studentListItems.length / itemsPerPage); p++) {
         const li = ul.appendChild(document.createElement('li'));

         //each LI element contains a link element 
         const a = li.appendChild(document.createElement('a'));

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
         showPage(studentListItems, e.target.textContent);
      })
   }


   function appendSearchBar(list) {
      // dynamically reate and append the DOM elements for the Search Bar
      const div = document.querySelector('.page-header')
         .appendChild(document.createElement('div'));
      div.className = 'student-search';

      const input = div.appendChild(document.createElement('input'));
      input.placeholder = 'Search for students...';
      const button = div.appendChild(document.createElement('button'));
      button.textContent = 'Search';

      
   } 

   appendSearchBar(studentListItems);
   showPage(studentListItems, 1);
   appendPageLinks(studentListItems);
});