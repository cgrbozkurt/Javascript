const gamerSkor=document.querySelector("#gamer-skor");
const pcSkor=document.getElementsByClassName("pc-skor");
const tas=document.getElementById("tasButton");
const kagit=document.getElementsByClassName("kagit");
const makas=document.getElementsByClassName("makas");
const pcBey=document.getElementsByClassName("pc-bey");
const gamerChoose=document.getElementById("oyuncu-secim");
const savas=document.getElementsByClassName("savas");
const PcChoose=document.getElementById("pc-sec");
const deneme=document.getElementById("secilen");


let oyuncu=0;
let bilgsisayar=0;

eventListeneer();

function bilgisayarSecim(){
    const secim=["tas","kagit","makas"];
    const rastgeleSecim=Math.floor(Math.random()*3);
    PcChoose.innerHTML=secim[rastgeleSecim];
    return secim[rastgeleSecim];
}

function eventListeneer(){
tas.addEventListener("click",tasSecim)
}
    

function tasSecim(){
deneme.innerHTML="taş"
    console.log("taş");
}

