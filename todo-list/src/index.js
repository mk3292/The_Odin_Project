import { createToDo } from './create-to-do.js';
import { blankProjectLoad } from './blank-project-load.js';
import { displayDefaultProject, displayTheForm, addItemToChecklist, clearForm } from './dom-manip.js';
import './style.css';

blankProjectLoad(); //call this on first land

//displayDefaultProject();

let clickEventsModule = (function () {
    const addNewToDo = document.querySelector(".add-todo-button");
    addNewToDo.addEventListener("click", displayTheForm);
    const addToChecklist = document.querySelector(".add-to-checklist");
    addToChecklist.addEventListener("click", addItemToChecklist);
    const clearButtom = document.querySelector(".reset-button");
    clearButtom.addEventListener("click", clearForm);

})();

console.log('hello');

// call create-to-do.js module and apply some objects/properties
const myToDo = createToDo("Grocery run", "Go get groceries", "12/25/23", "Low", "Meat, eggs, milk");
const myToDo2 = createToDo("Cook", "Prep food", "12/25/23", "Medium", "Chop onion, roast duck");
console.log("Show me properties on myToDo from index.js.....", myToDo);
console.log("Show me properties on myToDo2 from index.js.....", myToDo2);