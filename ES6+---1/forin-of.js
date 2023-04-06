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
