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

for(let value of langs){
console.log(value);
}

for (let value of name){
    console.log(value);
}