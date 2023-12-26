export const blankProjectLoad = () => {
    console.log("Called blankProjectLoad module to create blank array now");
    let projectsArray = [];
    console.log("Pushing the title name of project to the projectArray");
    let projectTitle = "Default Project";
    projectsArray.push({ projectTitle });
    console.log(projectsArray);
    return { projectsArray, projectTitle }; 
}