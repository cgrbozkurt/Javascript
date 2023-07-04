// document.querySelector("#button").addEventListener("click",()=>{
// fetch('https://jsonplaceholder.typicode.com/posts/1')
// .then((response)=>response.json())
// .then((post)=>{
//     fetch(`https://jsonplaceholder.typicode.com/comments?postId${post.id}`)
// .then((response)=>response.json())
// .then((comments)=>console.log(comments   ))
// })



// })


// Async await ile yapılışı

document.querySelector("#button").addEventListener("click",async ()=>{

    const responsePost=await fetch('https://jsonplaceholder.typicode.com/posts/1');

    const post= await responsePost.json();
    
    console.log(responsePost);


})