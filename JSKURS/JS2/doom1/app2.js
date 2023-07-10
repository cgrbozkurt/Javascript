let value;

value=document;
value=document.all.length;
value=document.all[document.all.length-11];



// const elements=document.all;

// for(let i=0; i<elements.length; i++){
//     console.log(elements[i])
// };

// const collections = Array.from(document.all);

// collections.forEach(function(collection){
// console.log(collection)
// });

// value=document.characterSet;
// value=document.URL;
// value=document.location;
// value=document.location.host;
// console.log(value);  

value=document.scripts.length;
value=document.links[0].getAttribute("class");
value=document.links[2].classList;
value=document.links[2].className;


value=document.forms.length;
value=document.forms[0];
value=document.forms["form"].id;
value=document.forms[0].getAttribute("name");

// console.log(value);

let element;
element=document.getElementById("tasks-title");
element=document.getElementsByClassName("list-group-item")[0];

element=document.querySelector("#tasks-title");
element=document.querySelectorAll(".list-group-item");
element=document.querySelectorAll("li");

// console.log(element);

// element.forEach(function(el){console.log(el)})

const e=document.querySelector("#clear-todos");

// console.log(e.innerHTML);
// console.log(e.classList);
// console.log(e.id);
// console.log(e.className);
console.log(e.style);

e.className="btn btn-danger";
e.style.color="yellow";
e.style.margin="11px";
e.style.padding="31px";
e.href="https://www.google.com";
e.target="_blank"
e.textContent="<span>SİLİN</span>";
e.innerHTML="<span style='color:blue '>SİLİN</span>";


const li=document.querySelectorAll(".list-group-item:nth-child(2)");

li.forEach(function(li){
    li.style.color="Aqua";
    li.style.background="orange";
})

const cardrow=document.querySelector(".card.row");
let ch;
ch=cardrow.children[2].children[1].textContent="Değişti";
ch=cardrow.children;
ch=cardrow.firstElementChild;
ch=cardrow.lastElementChild;
ch=cardrow.childElementCount;
ch=cardrow.parentElement.parentElement;
ch=cardrow.previousElementSibling;
ch=cardrow.children[2].previousElementSibling;
console.log(ch);

const newlink=document.createElement("a");
const cardbody=document.getElementsByClassName("card-body")[1];
newlink.id="clear-todos";
newlink.className="btn btn-warning";
newlink.href="http://www.google.com.tr";
newlink.target="_blank";


newlink.appendChild(document.createTextNode("Appenchilde git"));
cardbody.appendChild(newlink);


// const text=document.createTextNode("Createtextnode");
// cardbody.appendChild(text);


// console.log(newlink);


// DİNAMİK ELEMENT SİLME
// const todolist=document.querySelector("ul.list-group");
// const todo=document.querySelectorAll("li.list-group-item");
// todo[3].remove();
// todolist.removeChild(todo[0])
// todolist.removeChild(todolist.lastElementChild);

// console.log(todolist);
// console.log(todo);


const listgroup=document.querySelectorAll("ul.list-group")[1];
const newelement=document.createElement("li");
newelement.className="city";
newelement.textContent="Yeni yazdık oldu mu";

const cc=document.querySelectorAll("li.list-group-item")[2];

listgroup.replaceChild(newelement,cc);
listgroup.replaceChild(newelement, cc);


console.log(newelement);
console.log(listgroup);
console.log(cc);

// const cardbody=document.
