const promise1 =new Promise((resolve ,reject)=>{
    let success =false
    if(success){
        resolve({
            username:"anant",
            location:"ghaziabad"
        })
    }
    else{
        reject(new Error("user not fetched"))
    }

})
//console.log(promise1)
promise1.then(()=>{
    console.log(response);
}).catch((error)=>{
    console.log(error.message);
})