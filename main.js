//synchrnous
console.log("start")
for(let i=0 ;i<10 ;i++){
    console.log(i);
}
console.log("end");

//asynchronous
console.log("async start")
setTimeout(()=>{
    console.log("settimeout")
},2000)
    
console.log("async end");

