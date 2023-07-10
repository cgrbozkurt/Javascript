const person={
    name:":"+" "+" Cagri",
    age:30,
    salary:3000+"usd",
    gender:"Male",
    job:"null"

};

const langs=["html","java","c#"];

const name = "Baybars";


//OBJECT
for(let prop in person){
console.log(prop,person[prop]);
}
//ARRAY
// for(let index in langs){
//     console.log(index,langs[index]);
// }
// //STRİNG
// for(let index in name){
//     console.log(index,name[index]);
// }


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

// const myMap=new Map();

// const key1="Baybars";
// const key2={a:10,b:20};
// const key3=myFunc=()=> 2;

// myMap.set(key1,"String Değeri");
// myMap.set(key2,"Object Değeri");
// myMap.set(key3,"Function Değeri");

// console.log(myMap.size);
// console.log(myMap);


// //FOR EACH DÖNGÜSÜYLE 
// const forMap=new Map();

// forMap.set("kayseri",120);
// forMap.set("ankara",1321);
// forMap.set("adana",1231);
// forMap.set("yozgat","sorgun","trabzon"); /* 1. değer key 2. değer value 3 ve daha sonraki değerleri okumaz*/
// // console.log(forMap);
// forMap.forEach(function(key,value){
//     console.log(value,key);
// });




// //For of dönüsü ile gezinmek

// for(let [key,value] of myMap){
//     document.body.innerHTML={key,value};
// }
// let a="baybars";
// let b="baybars";

// if(a===b){
//     console.log("Eşit");}


//     let array1=[1,2,3,4,5];
//     let array2=[1,2,3,4,5];
//     if(array1===array2){
    
//         console.log("Eşit");
    
//     }

//     const person1={
//     name:"Baybars",
//     age:25
//     }
//     const person2={
//         name:"Baybars",
//         age:25
//     }
//     if(person1===person2){
//         console.log("eşit");
//     }

//     const cities=new Map();
//     const key=[1,2,3];
//     cities.set("Ankara",5);


