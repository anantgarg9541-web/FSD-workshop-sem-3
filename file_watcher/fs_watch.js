import fs from 'fs'

fs.watch("info.txt",(eventype,filename)=>{
    console.log("even type :",eventype);
    console.log("filename:",filename);
})