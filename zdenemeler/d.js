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


let donendeger=cube(2);
console.log(donendeger);

function cube(sayi){
const sonuc=sayi*sayi*sayi ;
return sonuc;
}

 


function kare(x){
    const square=x*x;
    console.log("çağrı")

    return square;
    console.log("çağrı")

}

let cevap=kare(donendeger);
console.log(cevap);

console.log("sonraki satıra geç");


function care(zayi){
    let karre=zayi*zayi;

}

function cup(zayi){
    let 
}
perfectNumber(6);
function perfectNumber(number){
    let toplam=0;
    for(let i=2; i<=number/2 ; i++){
        if(number%i===0){
            toplam+=i;
        }
    }
    toplam+=1+number;
    if(toplam===number*2){document.write("mükemmel sayı")}    
    else{console.log("mükemmel değil")}
}


//document.getElementById("demo").innerHTML="3<6 is"+" "+ Boolean(3<6) +"<br>"+ Boolean(9<4) +"<br>"+ Boolean(9<412);
let x=3;
let y=9;

document.getElementById("demo").innerHTML=
(x==3 || y==2 )  + "<br>"+
(x==5 || y==2 )  + " "  +'"is"'

;


function myFunction() {
    let age = document.getElementById("age").value;
    let voteable = (age < 18) ? "Too young":"Old enough";
    document.getElementById("demo").innerHTML = voteable + " to vote.";
  }
