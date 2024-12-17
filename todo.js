let titleThing = document.getElementById('titlething');
let headingThing = document.getElementById('headingthing');
let startButton = document.getElementById('startbutton');
let todoContainer = document.getElementById('todoscontainer');
let addNew = document.getElementById('addnew');
let idCounter = 0;
todoContainer.style.display = 'none';
function clearPage(){
    titleThing.style.display = 'none';
    headingThing.style.display = 'none';
    startButton.style.display = 'none';
    todoContainer.style.display = 'block';
}
startButton.onclick = clearPage;
function newTodo(){
    let toDo = document.createElement('div');
    toDo.innerHTML = "<input type = 'checkbox'><input type = 'text'><button onclick =\"this.parentElement.style.display = 'none';\" class = 'deletebutton'>Cancel reminder</button>";
    todoContainer.appendChild(toDo);
    toDo.id = idCounter;
    idCounter++;
}
addNew.onclick = newTodo;