//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector(".filter-todo");

//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteTodo);
filterOption.addEventListener("click", filterTodo);

//Functions
 function addTodo(event) {
    //Preventin page from refreshing
    event.preventDefault();
    //Todo Div
    const todoDiv = document.createElement('div');
    todoDiv.classList.add("todo");
    //Create Li
    const newTodo = document.createElement('li')
    //Makes a new note with youre value
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    //Add to pre created div
  todoDiv.appendChild(newTodo);
    //Check Button
    const completedButton = document.createElement('button');
    //Add Symbol
    completedButton.innerHTML = '<i class="fas fa-check"></ii>';
    completedButton.classList.add("complete-btn");
     //Add to pre created div
    todoDiv.appendChild(completedButton);
     //TrashButton
     const trashButton = document.createElement('button');
     //Add Symbol
     trashButton.innerHTML = '<i class="fas fa-trash"></ii>';
     trashButton.classList.add("trash-btn");
      //Add to pre created div
     todoDiv.appendChild(trashButton);
     //Append to list
     todoList.appendChild(todoDiv)
     //Clear Search Bar, after adding a new note
     todoInput.value = "";
}

function deleteTodo(e) {
    const item = e.target;
  
    if (item.classList[0] === "trash-btn") {
      // e.target.parentElement.remove();
      const todo = item.parentElement;
      //Animation
      todo.classList.add("fall");
      //Waits till the animation is done and the removes the Text
      todo.addEventListener("transitionend", function() {
        todo.remove();
      });

    }

    if (item.classList[0] === "complete-btn") {
      const todo = item.parentElement;
      todo.classList.toggle("completed");
      console.log(todo);
    }
  }
  

  