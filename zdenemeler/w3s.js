function myFunction(){
    let yas=document.getElementById("age").value;
    let kiyaslama=(yas<18) ? "ufaksın biraderim":"yaşınız yeterli";
document.getElementById("demo").innerHTML="oy kullanmak için" + " " + kiyaslama;
}

function renkdegis(){
 let   rengsec=document.getElementById("color").value;
 document.body.style.background=rengsec;
}

let form=document.getElementById("color-form");
let ipid=document.getElementById("ipid");
let but=document.getElementById("but");

submit(renginisec);

function submit(){
    form.addEventListener("submit", renginisec);
    

}

function renginisec(a){
    let renk=ipid.value;
    let degis=document.body.style.background=renk;
    a.preventDefault();
}

const hours=new Date().getHours();
let cevap;
if(hours>22){
    cevap="iyi geceler";
}
else if(hours<15){
    cevap="günaydın";
}
else {cevap="iyi günler";}


let day;

switch(new Date().getDay()){
    case 0:
    day="sunday"
    break;
    // case 1:
    //     day="monday"
    //     break;
        case 2:
            day="tuesday"
            break;
            case 3:
                day="wednesday"
break;
 //default özelliği case bulunamayan durumda yazdırılır  sıralama önemli değil herhangi bir yere yazılabilir
 default:
    day="case bulunamadı";
    break;  
case 4:
    day="tursday"
    break;
    case 5:
        day="friday"
        break;
        case 6:
            day="saturday"
            break;
           
}
cevap+=" " +day;

document.getElementById("dey").innerHTML=cevap;


const cars=["bmw","volvo","ford","şahin","doğan","kartal"];

let arabalar=" ";

for(let i=0; i<cars.length; i++){
    arabalar+=cars[i]+ "<br>";
}
// document.getElementById("rac").innerHTML= arabalar; 


const atlar=["ahal teke", "arap","ingiliz", "kırma","türkmen atı","kırat","küheylan"];

let secme;

for(i=0; i<atlar.length; i++){
    secme+=atlar[i]+"<br>";
}


secme+="<br>" +arabalar;
document.getElementById("rac").innerHTML= secme; 


let k="27";
let kk;
for(i=0; i<k.length; i++){
    kk+="1"+i;
}

console.log(kk);

const Iterables=["a","b","c","d","e","f"];

let texit;
for(const x of Iterables){
    texit+=x+ " " + "<br>";
}


document.getElementById("texit").innerHTML=texit;