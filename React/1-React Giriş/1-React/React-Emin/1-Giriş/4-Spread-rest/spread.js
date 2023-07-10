let numbers=[1,2,3,4,5,6,7];

let newNumbers=[100,...numbers,1000]
console.log(newNumbers);


let user={
    name:"Çağrı",
    surname:"Bozkurt"
}

let newUser={
    ...user,
    age:30
}

console.log(newUser);