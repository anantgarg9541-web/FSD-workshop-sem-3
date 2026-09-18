function getUser() {
   return  new Promise((resolve, reject) => {
        let user = true
        if (!user) {
            reject(new Error("user not exists"))

        } else {
            resolve({
                username: "anant",
                role: "ml engineer"
            })
        }
    })
    
}
async function fetchUser(){
    const response = await getUser()
console.log(response);
}
fetchUser();
console.log("hello");