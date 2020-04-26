/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

// variable to store the student list item elements in the student list
const studentListItems = document.getElementsByClassName('student-item cf'); 

//variable to store the number of items to show on each “page” - for this project - 10
const itemsPerPage = 10;

//`showPage` function to hide all of the items in the list except for the ten you want to show.

function showPage(list, page) {
   let startIndex = (page * itemsPerPage) - itemsPerPage;
   let endIndex = page * itemsPerPage;

   //display any list item with an index that is greater than or equal to the start index variable and less than the end index variable
   for (let i = 0; i < list.length; i++) {
      if ( i >= startIndex && i < endIndex) {
         list[i].style.display = 'display';
      } else {
         list[i].style.display = 'none';
      }
   }
}

showPage(studentListItems, 2);



/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/





// Remember to delete the comments that came with this file, and replace them with your own code comments.