const langs=["java","javascript","pyhton","hmtl","css"];
// console.log(langs[1],langs[2],langs[3]);
console.log(...langs); //ayrı ayrı değerler olarak gösterir,üst yorumla aynı işlem 

const cars=["Volvo","Bmw",...langs];
console.log(cars);

const number=[1,2,3,4,5,6,7,8];

const [a,b,...c]=number;

console.log(c);

const addNumbers=(x,y,z)=> console.log(x+y+z);

const sayi=[100,200,300];

addNumbers(...sayi);