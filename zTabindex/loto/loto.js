const saybut=document.getElementById("a1");
const arti=  document.getElementById("arti");
const eksi=document.getElementById("eksi");
const carpi=document.getElementById("carpi");
const random=document.getElementById("demo");
let a= null;


eventEkle();

function eventEkle(){
saybut.addEventListener("click",sayiUret);
arti.addEventListener("click",carpim);
eksi.addEventListener("click",eksi1);
carpi.addEventListener("click",carpi1);
}

function sayiUret(){
   random.innerHTML = Math.floor(Math.random() * 101)+1;
     console.log(a);
    }
sayiUret();

function carpim(){
    a=+random.innerHTML;

    a++;
    random.innerHTML=a;

}

function eksi1(){
    a=+random.innerHTML;

    a--;
    random.innerHTML=a;

}

function carpi1(){
    a=+random.innerHTML;

    a=a*a;
    random.innerHTML=a;

}

