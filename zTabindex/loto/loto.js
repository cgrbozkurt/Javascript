const saybut=document.getElementById("a1");
const arti=  document.getElementById("arti");
const eksi=document.getElementById("eksi");
const carpi=document.getElementById("carpi");
let a;



eventEkle();

function eventEkle(){
saybut.addEventListener("click",sayiUret);
arti.addEventListener("click",carpim);
eksi.addEventListener("click",eksi1);
carpi.addEventListener("click",carpi1);
}




function carpim(){
    sayiUret();
    a++;
}

function eksi1(){
    sayiUret();

    a--;
}

function carpi1(){
    a=a*a;
}

function sayiUret(){
   a= document.getElementById("demo").innerHTML = Math.floor(Math.random() * 101);
   return a;
    console.log(a);
   }