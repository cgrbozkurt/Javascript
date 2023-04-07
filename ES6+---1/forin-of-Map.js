const person={
    name:"Cagri",
    age:30,
    salary:3000+"usd"
};

const langs=["html","java","c#"];

const name = "Baybars";


//OBJECT
for(let prop in person){
console.log(prop,person[prop]);
}
//ARRAY
for(let index in langs){
    console.log(index,langs[index]);
}
//STRİNG
for(let index in name){
    console.log(index,name[index]);
}


//OBJECT let value of objectle kullanılmaz

// for( let value of person){
//     console.log(value);
// }
//ÇALIŞMADI

// for(let value of langs){
// console.log(value);
// }

// for (let value of name){
//     console.log(value);
// }

// / MAP 

const myMap=new Map();

const key1="Baybars";
const key2={a:10,b:20};
const key3=myFunc=()=> 2;

myMap.set(key1,"String Değeri");
myMap.set(key2,"Object Değeri");
myMap.set(key3,"Function Değeri");

console.log(myMap.size);
console.log(myMap);
