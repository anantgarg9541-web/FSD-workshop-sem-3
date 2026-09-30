//CRUD
//sync
//async
// -->callback  base method
// -->promises based method

import fs from 'fs'

fs.writeFileSync("node.txt" , "Hello World")

const data =fs.readFileSync("node.txt","utf8") //use encoding method
console.log("Data:",data)

//update the file

fs.appendFileSync("notes.txt","hello world")

//delete the file
fs.rmSync("notes.txt")