// document.getElementById("btn").addEventListener("click",function(){
//     //XMLhttpRequest

// //     readyState	Holds the status of the XMLHttpRequest.
// // 0: request not initialized
// // 1: server connection established
// // 2: request received
// // 3: processing request
// // 4: request finished and response is ready


//     const xhr=new XMLHttpRequest();

//     xhr.open("GET")
//     console.log(xhr); 
// })
function getComments(url,id){
    const xhr=new XMLHttpRequest();
    xhr.addEventListener("readystatechange"),()=>{
        if(xhr.readyState===4 && xhr.status===200){
            console.log(xhr.responseText);
        }
    }
    xhr.open("GET",)
}