//function callback(){
  //  console.log("hello world");
//}
//setTimeout(callback ,2000)
function greet(username ,callback){
    console.log("welcome")
    if(typeof callback === "function"){
        callback(username)
    }
}
greet ("anant",(username)=>{
    console.log("hello",username)

} )