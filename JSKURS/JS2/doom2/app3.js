// document.querySelector(".container").addEventListener("click",function(){
//     console.log("Div Container")
// });

// document.querySelector(".card.row").addEventListener("click",function(){
// console.log("card row")
// })
// document.querySelectorAll(".card-body")[1].addEventListener("click",function(){
//     console.log("Card Body")
// });

const cardbody=document.querySelectorAll(".card-body")[1];

cardbody.addEventListener("click",run);

function run(e){
    // console.log(e.target);

if (e.target.className==="fa fa-remove"){
    console.log("Silme İşlemi");
}

if (e.target.className==="form-control"){
    console.log("tıklaamaaa");
}

};