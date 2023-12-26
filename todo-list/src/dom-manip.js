import { blankProjectLoad } from "./blank-project-load.js";

export function displayDefaultProject () {
    // DOM for default project load
    const projectsInfoDiv = document.createElement("div");
    projectsInfoDiv.textContent = blankProjectLoad().projectTitle;
    contentDiv.appendChild(projectsInfoDiv);
}

export function displayTheForm() {
    document.getElementById("add-todo-form").style.display = "";
}

export function addItemToChecklist() {
    const addItem = document.getElementById("add-to-checklist").value;

    if (addItem !== "") {   // if what is being added is not an empty string
        const ul = document.querySelector(".todo-ul");
        const li = document.createElement("li");
        li.textContent = addItem;
        const span = document.createElement("span");
        span.className = "remove-checklist-item";
        const removeIcon = document.createTextNode("\u0007"); // creates an X
        li.appendChild(span);
        span.appendChild(removeIcon);
        ul.appendChild(li);
        document.getElementById("add-to-checklist").value = ""; // clears and sets checkbox back to blank

        // DOM check for existing checklist items
        if (document.querySelectorAll("li").length > 0) {
            console.log("Inside module if .....", document.querySelectorAll("li").length);
            const nodeListCheckList = document.querySelectorAll("li");
            console.log(nodeListCheckList);

            // DOM to bind click event to each node in nodelist and remove if clicked.
            nodeListCheckList.forEach(checkListItem => {
                checkListItem.addEventListener("click", function removeItemFromChecklist() {
                    checkListItem.remove();
                });
            })
        }
        
    } else return;
}

export function clearForm() {
    const nodeListCheckList = document.querySelectorAll("li");
    for (let i = 0; i < nodeListCheckList.length; i++) {
        nodeListCheckList[i].remove();
    }
    document.getElementById("add-todo").reset();
}

/*
 // Heading
 const contentDiv = document.querySelector(".content");
 const heading = document.createElement("h1");
 heading.textContent = "ToDo app";
 contentDiv.appendChild(heading);
 */