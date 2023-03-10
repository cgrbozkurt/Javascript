const form=document.getElementById("todo-form");
const filter=document.getElementById("filter");
const List=document.querySelector(".list-group");
const todoInput=document.querySelector("#todo")


eventler();

function eventler(){
form.addEventListener("submit", todoEkle);
}

function todoEkle(e){
    const yeniTodo=todoInput.value.trim();

    // console.log(yeniTodo);
    yenitodoekle(yeniTodo);

    e.preventDefault();
}
function yenitodoekle(yeniTodo){
    const item=document.createElement("li");
    const link=document.createElement("a");
    link.href="#";
    link.className="delete-item";
    link.innerHTML= "<i class = 'fa fa-remove'></i>";
    List.className="list-group-item d-flex justify-content-between";


    item.appendChild(document.createTextNode(yeniTodo));
    item.appendChild(link);
    List.appendChild(item);

}


 





