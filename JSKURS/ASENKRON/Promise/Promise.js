// let check=true;

// const promise1=new Promise((resolve,reject)=>{
//     if(check){
//         resolve("Promise Başarılı")
//     }
//     else{reject("Promise Başarısız")}
// })

// console.log(promise1);






// let check=true;

// function createPromise(){
//     return new Promise((resolve,reject)=>{
//         if(check){
//             resolve("Promis Başarılı")
//         }
//     else{reject("Promis Başarısız")}
//     })
// }

// createPromise()
// .then((response)=>{console.log(response);})
// .catch((error)=>{console.log(error);})
// .finally(()=>console.log("Her Zaman Çalışır"));







// ? Promise XMLHttpRequest ile kullanımı





// function readStudents(url){
//     return new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest();
//         try {
//             xhr.addEventListener("readystatechange",()=>{
//                 if(xhr.readyState===4 && xhr.status===200){
//                     resolve(JSON.parse(xhr.responseText));
//                 }
//             })
//         } catch (error) {
//             reject(error);
//         }
//         xhr.open("GET",url);
//         xhr.send();
//     })
// }

// readStudents("student.json")
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))


// function getUsers(url){
//     return new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest();
//         xhr.addEventListener("readystatechange",()=>{
//            try {
//             if(xhr.readyState===4 && xhr.status===200){
//                 resolve(JSON.parse(xhr.responseText));
//             }
//            } 
//            catch (error) {
//             reject(error);
//            }
           
            
//         })
//         xhr.open("GET",url);
//            xhr.send();
//     })
// }

// function getCommend(url){
//     return new Promise((resolve,reject)=>{
//         const xhr=new XMLHttpRequest();
//         xhr.addEventListener("readystatechange",()=>{
//            try {
//             if(xhr.readyState===4 && xhr.status===200){
//                 resolve(JSON.parse(xhr.responseText));
//             }
//            } 
//            catch (error) {
//             reject(error);
//            }
           
            
//         })
//         xhr.open("GET",url);
//            xhr.send();
//     })
// }





// getUsers("https://jsonplaceholder.typicode.com/users/")
// .then((data)=>{ 
//     console.log(data);
       
return getCommend(`https://jsonplaceholder.typicode.com/comments/${data.id}`)
// })
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err))



const p1=Promise.resolve("Birinci Promise");
const p2=Promise.resolve("İkinci Promise");
const p3=new Promise((resolve,reject)=>{
    resolve("Üçüncü Promise")
});
const p4=Promise.reject("Promiselerin bir tanesinde bile hata varsa catch çalışır");

Promise.all([p1,p2,p3,p4])
.then((res)=>{
    for(let value of res){
        console.log(value);
    }
})
.catch((err)=>console.log(err))