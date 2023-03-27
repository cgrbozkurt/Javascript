const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");
let todoKey;
let todolar;

addEventListener();

function addEventListener(){
    form.addEventListener("submit",addTodo);

}

function addTodo(e){
    let newTodo=todoInput.value.trim();
    console.log(newTodo);

    if(newTodo===""){
        alert("bir todo giriniz");
    }
    else {
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
    }

    e.preventDefault();
}

function  addTodoToUI(newTodo){
let Lis=document.createElement("li");
let Link=document.createElement("a");

Lis.className="list-group-item d-flex justify-content-between";
Link.className="delete-item";
Link.href="#";
Link.innerHTML="<i class = 'fa fa-remove'></i>";

Lis.appendChild(document.createTextNode(newTodo));
Lis.appendChild(Link);
todoList.appendChild(Lis);

}

function addTodoToStorage(newTodo){
checkTodokeyFromStorage();
todokey.push(newTodo);
localStorage.setItem("todokey1",JSON.stringify(todokey));

}
function checkTodokeyFromStorage(){
    if(localStorage.getItem("todokey1")===null){
        todos=[];
    
    } 
    else{
        todos=JSON.parse(localStorage.getItem("todokey1"));
    }
    return todos;
}


/*function addTodoToStorage(newTodo){
    checkTodokeyFromStorage();
    todokey.push(newTodo);
    localStorage.setItem("todokey1",JSON.stringify(todokey));
    
    }
    function checkTodokeyFromStorage (){
        if(localStorage.getItem("todokey1")===null){
            todos=[];
        
        } 
        else{
            todos=JSON.parse(localStorage.getItem("todokey1"));
        }
    }*/
    
    







