// Create selector constants
const toDoInput = document.querySelector('.todo-input');
const toDoButton = document.querySelector('.todo-button');
const toDoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('.filter-todo');

// event listeners 
toDoButton.addEventListener('click', addToDo);
toDoList.addEventListener('click', deleteTask);
filterOption.addEventListener('click', filterToDo);

// functions
function addToDo (event) {
    // keeps 
    event.preventDefault();

    //  creates new div for newly added tasks
    const toDoDiv = document.createElement('div');
    toDoDiv.classList.add('todo');

    // creates new to do item/text within toDoDiv--- creates list
    const newToDo = document.createElement('li');
    newToDo.innerText= toDoInput.value;
    newToDo.classList.add('to-do-item');
    toDoDiv.appendChild(newToDo);

    // creates checked mark for task completed
    const checkMarkButton = document.createElement('button');
    checkMarkButton.innerHTML = '<i class="fas fa-check"></i>';
    checkMarkButton.classList.add('checkMark-btn');
    toDoDiv.appendChild(checkMarkButton);

    // garbage button for deleted tasks
    const garbageButton = document.createElement('button');
    garbageButton.innerHTML = '<i class="fas fa-trash"></i>';
    garbageButton.classList.add('garbage-btn');
    toDoDiv.appendChild(garbageButton);

    // appends tasks in the newly created div to the to do list
    toDoList.appendChild(toDoDiv);

    // clear input.value 
    toDoInput.value="";

}


function deleteTask(e) {
    console.log(e.target);
    const item = e.target;

    // delete task
    if(item.classList[0] === 'garbage-btn') {
        const toDo = item.parentElement;
        // add animation 
        toDo.classList.add('cascade');
        toDo.addEventListener('transitionend', function() {
            toDo.remove();
        })
     
    }

    // check task complete 
    if(item.classList[0] === 'checkMark-btn') {
        const todo = item.parentElement;
        todo.classList.toggle('finito')
    }
}

// fileter the to dos 

function filterToDo(e) {
    const todos = toDoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(e.target.value){
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'finito':
                if (todo.classList.contains('finito')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';
                }
                break;
                case 'unfinished':
                    if(!todo.classList.contains('finito')){
                    todo.style.display = 'flex';
                }else{
                    todo.style.display = 'none';     
                }
                break;
    };
})
};