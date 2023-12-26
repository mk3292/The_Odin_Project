let toDoArray = []; // create array for todo

// factory function to create todo list

export const createToDo = (Title, Description, DueDate, Priority, CheckList) => {
    console.log("Called createToDo Module... creating now");
    console.log({ Title, Description, DueDate, Priority, CheckList });
    console.log("Pushing this object to toDoArray");

    toDoArray.push({ Title, Description, DueDate, Priority, CheckList });
    console.log(toDoArray);
    return { Title, Description, DueDate, Priority, CheckList };
}
