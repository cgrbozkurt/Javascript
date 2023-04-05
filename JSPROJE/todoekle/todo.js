const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");
const todokey=[ ];

eventListener();

function eventListener(){
    form.addEventListener("submit",addTodo);
    document.addEventListener("DOMContentLoaded",LoadAllTodoToUI);
    secondCardBody.addEventListener("click",deleteTodo);
    filter.addEventListener("keyup",filterTodos);
    clearButton.addEventListener("click",clearTodos);

}
function clearTodos(){
    if (confirm("hepsini Silelim mi hacabi")){
        todoList.innerHTML=null;
    }
}

function filterTodos(e){
const filterValue=e.target.value.toLowerCase();
const ListItems=document.querySelectorAll(".list-group-item");

ListItems.forEach(function(ListItem){
    const text=ListItem.textContent.toLowerCase();
    if(text.indexOf(filterValue)===-1){
        ListItem.setAttribute("style","display:none !important");
    }
    else ListItem.setAttribute("style","display:block");
})
}

function deleteTodo(e){
    if(e.target.className==="fa fa-remove"){
        e.target.parentElement.parentElement.remove();
        alert("todo silindi babbaağ");
        deleteTodoFromStorage(e.target.parentElement.parentElement);
    }
    localStorage.setItem("todos",JSON.stringify(todos));
}

function deleteTodoFromStorage(deleteTodo){
    let todos;
 todos=addTodoToStorage();

todos.forEach(function(todo,index){
    if(todo===deleteTodo){
        todos.splice(index,1);
    }
})
}

function LoadAllTodoToUI(){
    let todos=addTodoToStorage();
    todos.forEach(function(todos){
        addTodoToUI(todos);  
    })

}

function addTodo(e){
    const newTodo=todoInput.value.trim();
    console.log(newTodo);

if (newTodo===""){
    alert("bir todo giriniz");
}

else {
    addTodoToUI(newTodo);
    addTodoToStorage(newTodo);   

}

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



function addTodoToStorage(newTodo){
checkTodokeyFromStorage();
todokey.push(newTodo);
localStorage.setItem("todos",JSON.stringify(todokey));

}
function checkTodokeyFromStorage (){
    if(localStorage.getItem("todos")===null){
        todos=[""];
    
    } 
    else{
        todos=JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

