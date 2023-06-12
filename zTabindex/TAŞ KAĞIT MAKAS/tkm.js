const gamerSkor=document.getElementById("gamer-skor")
const pcSkor=document.getElementById("pc-skor");
const tas=document.getElementById("tasButton");
const kagit=document.getElementById("kagitButton");
const makas=document.getElementById("makasButton");
const pcBey=document.getElementsByClassName("pc-bey");
const gamerChoose=document.getElementById("oyuncu-secim");
const savas=document.getElementById("savas");
const PcChoose=document.getElementById("pc-sec");
const deneme=document.getElementById("secilen");
let a="";

let oyuncu=null;
let bilgisayar=null;

eventListeneer();



function bilgisayarSecim(e){
    const secim=["Taş","Makas","Kağıt"];
    const rastgeleSecim=Math.floor(Math.random()*3);
    PcChoose.innerHTML= secim[rastgeleSecim];
    // setTimeout(() => {
    //     PcChoose.innerHTML="?"
    // }, 2500);
    return secim[rastgeleSecim];


}

function eventListeneer(){
tas.addEventListener("click",function(){
    deneme.innerHTML=tas.innerHTML
    // setTimeout(() => {
    //     deneme.innerHTML="?"
    // }, 2500);
    bilgisayarSecim();
    let bilSecim=bilgisayarSecim();
    sonuc("Taş",bilSecim);
   

});

kagit.addEventListener("click",function(){
    deneme.innerHTML=kagit.innerHTML
    // setTimeout(() => {
    //     deneme.innerHTML="?"
    // }, 5500);
    let bilSecim=bilgisayarSecim();
   

    bilgisayarSecim();
    sonuc("Kağıt",bilSecim);
    
});
makas.addEventListener("click",function(){
    deneme.innerHTML=makas.innerHTML
    // setTimeout(() => {
    //     deneme.innerHTML="?"
    // }, 2500);
    let bilSecim=bilgisayarSecim();
    

    bilgisayarSecim();
    sonuc("Makas",bilSecim);
}
);
}

function sonuc(){

}
    

function sonuc(oyuncu,bilgisayar){
    switch(oyuncu+bilgisayar){

        case "TaşMakas":
            case "MakasKağıt":
            case "KağıtTaş":
                kazan();
            break;

            case "TaşKağıt":
            case "KağıtMakas":
            case "MakasTaş":
                kaybet();
                break;

                case "TaşTaş":
                case "KağıtKağıt":
                case "MakasMakas":
                    berabere();
                    break;
                    
                    default : "Hata";



    }

}



function kazan(){
    savas.innerHTML="KAZANDINIZ";
oyuncu=+gamerSkor.innerHTML;
oyuncu++;
gamerSkor.innerHTML=oyuncu;

// setTimeout(() => {
//     savas.innerHTML=""
//    }, 5500);
console.log("kazqan");

}

function kaybet(){
//    bilgisayar=bilgisayar+1;
//    pcSkor.innerHTML=bilgisayar.toString();
   savas.innerHTML="KAYBETTİN DÜDÜK";
   bilgisayar=+pcSkor.innerHTML;
   bilgisayar++;
   pcSkor.innerHTML=bilgisayar;
   console.log("kaybet");
//    setTimeout(() => {
//     savas.innerHTML=""
//    }, 5500);
}
 
// gamerSkor.innerHTML=0123;
function berabere(){
    savas.innerHTML="BERABERE";
    // setTimeout(() => {
    //     savas.innerHTML=""
    //    }, 5500);
    console.log("berabere");
}







