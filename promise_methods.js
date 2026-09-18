//promise 1
const promise1 =new Promise((resolve ,reject)=>{
    let success =false
    if(success){
        resolve({
            username:"anant",
            userID:"2503202300006",
            location:"ghaziabad"
        })
    }
    else{
        reject(new Error("user not fetched"))
    }
})
// promise1.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error.message);
// })
//promise 2
const promise2 =new Promise((resolve ,reject)=>{
    let success =false
    if(success){
        resolve({
            username:"anant garg",
            userID:"2503202300006",
            location:"ghaziabad"
        });
    }
    else{
        reject(new Error("user not fetched"));
    }
});
// promise2.then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error.message);
// })

//promise all

// Promise.all([promise1, promise2])
// .then((response)=>{
//     console.log("promises resolved successfully")
//     console.log(response);
// })
// .catch((error)=>{
//     console.log("promises failed")
//     console.log(error.name);
// })

// Promise.allSettled([promise1, promise2])
// .then((response)=>{
//     console.log("promises resolved successfully")
//     console.log(response);
// })
// .catch((error)=>{
//     console.log("promises failed")
//     console.log(error.message);
// })

Promise.any([promise1, promise2])
.then((response)=>{
    return response
})
.then((result)=>{
    console.log(result)
})
.catch((error)=>{
    console.log("promises failed")
    console.log(error.message);
})

