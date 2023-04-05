// const merhaba = firstname => tek parametre alıyorsa paranteze gerek yok 
const merhaba = (firstname,secondname) => {
    console.log("merhaba",firstname,secondname)
}
merhaba("Çağrı","Bozkurt");

const cube = x => {
    return x*x*x;
}
document.body.innerHTML=cube(4);