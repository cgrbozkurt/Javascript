const form=document.querySelector("#todo-form");
const todoInput=document.querySelector("#todo");
const todoList=document.querySelector(".list-group");
const firstCardBody=document.querySelectorAll(".card-body")[0];
const secondCardBody=document.querySelectorAll(".card-body")[1];
const filter=document.querySelector("#filter");
const clearButton=document.querySelector("#clear-todos");

const todokey=[];



eventListener();

function eventListener(){
    form.addEventListener("submit",addTodo);


}

function addTodo(e){
    let newTodo=todoInput.value.trim();
    console.log(newTodo);

    if (newTodo ===""){
        alert("Bir Todo İsmi Giriniz");
    }
    else{ addTodoToUI(newTodo);
        addTodoToLocalStorage(newTodo);

    
    }

    console.log(e.target);

    
    

e.preventDefault(); 
}

function addTodoToLocalStorage(newTodo){
    GetTodos();
   todokey.push(newTodo);
    localStorage.setItem("todos",JSON.stringify(todokey));

}

function GetTodos(){
//     if(localStorage.getItem("todos")===null){
//         asd=[];   
//     }
//     else{ asd=JSON.parse(localStorage.getItem("todos"))

// }
JSON.parse(localStorage.getItem("todos"))
// return asd;

}

function addTodoToUI(newTodo){
    let listItem=document.createElement("li");
    let link=document.createElement("a");

    listItem.className="list-group-item d-flex justify-content-between";
    link.href="#";
    link.className="delete-item";
    link.innerHTML="<i class = 'fa fa-remove'></i>";

    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);

}