/// LOCAL STORAGE 

// SET İTEM

localStorage.setItem("hareket","burpee")
localStorage.setItem("hareket1","burpee1")

//GET İTEM 

// const value=localStorage.getItem("Bereket");
// console.log(value);

// CLEAR İTEMS 

// localStorage.clear();

localStorage.setItem("hareket","burpee")
localStorage.setItem("hareket1","burpee1")

if (localStorage.getItem("hareket1") === null){
    console.log("Sorguladığınız veri bulunmuyor");
}

else {console.log("Sorguladığınız veri bulunuyor")}


//LOCAL STORAGE ARRAY YAZMA 

// const todos=["todo 1","todo 2","todo 3"];

// localStorage.setItem("todos",todos);

// localStorage.setItem("todos", JSON.stringify(todos));

// const value=JSON.parse(localStorage.getItem("todos"));

// console.log(value);


const form=document.getElementById("todo-form");
const todoInput=document.getElementById("todo");

form.addEventListener("submit",addTodoo);
function addTodoo(e) {
     

    
    e.preventDefault();
}
