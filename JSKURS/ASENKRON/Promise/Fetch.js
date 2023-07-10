
function getData(url){
    fetch(url)
    .then((response)=> {
    return response.json()})
    .then((data)=>console.log(data))
.catch((err)=>console.log(err))
}

getData('https://jsonplaceholder.typicode.com/comments/2');