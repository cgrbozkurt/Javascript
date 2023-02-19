const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter")
const clearButton=document.querySelector("#clear-todos");


// evenListeners();


function addEventListener(){
    form.evenListeners("submit",addTodo);

}

function addTodo(e){
    const newTodo=todoInput.value;
    console.log(newTodo);
}