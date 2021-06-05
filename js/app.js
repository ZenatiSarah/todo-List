//Selecteurs
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector('.todo-list');

//Ecouteur

todoButton.addEventListener('click', addTodo);
todoList.addEventListener("click", deleteCheck);

//FUNCTIONS

function addTodo(event){
    //PreventDefault pour stopper le comportement après exécution
    event.preventDefault();
    //Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');

    //Créer la liste li
    const newTodo = document.createElement("li");
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Button Check
    const completeButton = document.createElement("button");
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-button");
    todoDiv.appendChild(completeButton);

    //Button Supprimer
    const buttonSupp = document.createElement("button-supp");
    buttonSupp.innerHTML = '<i class="fas fa-times"></i>';
    buttonSupp.classList.add("supp-button");
    todoDiv.appendChild(buttonSupp);

    //Ajouter notre Todo
    todoList.appendChild(todoDiv)
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;
    if (item.classList[0] === "supp-button") {
        const todo = item.parentElement;
        todo.remove();
    }
    
    //Check Mark
    if (item.classList[0] === "complete-button") {
        const todo= item.parentElement;
        todo.classList.toggle("completed");
    }
}