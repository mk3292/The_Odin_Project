import { compareAsc, format, parseISO, startOfToday } from 'date-fns';
import { clearForm } from './dom-manip';

let toDoArray = []; // create array for todo

// factory function to create todo list

export const createToDo = () => {
    let Title = document.getElementById("Title").value;
    let Description = document.getElementById("Description").value;
    let DueDate = document.getElementById("DueDate").value;
    let Priority = document.getElementById("Priority").value;

    // Check to see if empty fields exist.
    if (Title == " "|| Description == "" || DueDate == "") {
        alert("Title, Description, and Due Date are required fields, try aagain");
        return;
    }

    // Check to see if a pre date was entered
    if (parseISO(DueDate) < startOfToday()) {
        alert("you have entered a date that has already passed! Try again");
        console.log("due date", parseISO(DueDate));
        console.log("date now", startOfToday());
        return;
    }

    // Loop over the nodelist for check list items from the DOM and format to string
    const nodeListCheckList = document.querySelectorAll("li");
    let CheckListArray = [];
    for (let i = 0; i < nodeListCheckList.length; i++) {
        let strippedCheckList = nodeListCheckList[i].textContent.replace("\u0007", '');
        ChestListArray.push(strippedCheckList);
    }

    let CheckList = CheckListArray.join(", ");

    console.log("Called createToDo module... creating todo now");
    console.log({ Title, Description, DueDate, Priority, CheckList });
    console.log("Pushing this object to the todoarray");
    toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
    console.log(toDoArray);

    clearForm();

    return { Title, Description, DueDate, Priority, CheckList };

}
