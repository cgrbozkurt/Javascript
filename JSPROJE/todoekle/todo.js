const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");


eventListener();

function eventListener(){
    form.addEventListener("submit",addTodo);

}

function addTodo(e){
    const newTodo=todoInput.value.trim();
    console.log(newTodo);

addTodoToUI(newTodo);


e.preventDefault();
}

function addTodoToUI(newTodo){
    const ListItem=document.createElement("li");
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>";
    ListItem.className="list-group-item d-flex justify-content-between";

    ListItem.appendChild(document.createTextNode(newTodo));

    ListItem.appendChild(link);
    todoList.appendChild(ListItem);



}