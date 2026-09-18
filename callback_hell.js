function getuser(id ,callback){
    setTimeout(()=>{
        console.log("user fetched");
        const user ={
            id :1,
            username :"anant"
        }
        callback(null,user)
    },1000)
    
}
function getProfile(userId ,callback){
    setTimeout(()=>{
        console.log("user fetched");
        const user ={
            id :1,
            username :"anant",
            location:"new delhi",
            interest:["web dev","agentic AI"]
        }
        callback(null,user)
    },1000)
}
function  getposts(username ,callback){
    setTimeout(()=>{
        console.log("posts fetched");
        const posts =["post1","post2" ,"post3"]
        
        callback(null,posts)
    },1000)
}
getuser(10101,(error ,user)=>{
    if(error){
        console.log(error)
        return
    }
    getProfile(user.id ,(error,profile)=>{
        if(error){
        console.log(error)
        return
    }
    getposts(profile.username,(error ,posts)=>{
        if(error){
        console.log(error)
        return
    }
    console.log("posts:",posts);
    })
    })
})