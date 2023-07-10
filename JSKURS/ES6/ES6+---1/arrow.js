// const merhaba = firstname => tek parametre alıyorsa paranteze gerek yok 
const merhaba = (firstname,secondname) => {
    console.log("merhaba",firstname,secondname)
}
merhaba("Çağrı","Bozkurt");

const cube = x => {
    return x*x*x;
}
document.body.innerHTML=cube(4);

//DESTRUCTİNG

let number1,number2;
arr=[1,2,3,4];
[number1,number2]=arr;
// [number1,number2]=[1,2,3,4];=arr; olduğu için number 1 bire number2 ikiye eşit oluyor 

const cars={  a:10,b:20,c:30,d:40,e:50 };

const {a:numbera,b:numberb,e:numberc}=cars;

// console.log(a,b,e);
console.log(numbera,numberb,numberc);

const getFruit = () => ["banana","apple","grape"];

const [mey,meyv,meyve]=getFruit();
console.log(mey,meyv,meyve);

//SPREAD OPERATOR 

console.log(...arr);

