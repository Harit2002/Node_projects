const fs = require("fs");

fs.writeFile("./text.txt", "This is sample file", (err) =>{
    if(err) {
        console.log(err)
    }else {
        console.log("appended")
    }
})

fs.readFile("text.txt", {encoding:"utf-8"}, (err, data) => {
    if(err)  console.log(err)
    else console.log(data)
    
})


const data = fs.readFileSync("text.txt",  {encoding:"utf-8"},(err, data) => {
    if(err)  console.log(err)
    else console.log(data)
    
})

console.log("end")

/**
 * FILE READING AND WRITING USING NODE JS
 * ==========================================
 * 
 * 
 * fs.readFile("filepath", {encoding:"utf-8"}, (err, data))
 * It is asynchronus means next line of code will execute if it takes time
 * 
 * where as fs.readFileSync("filePath", {encoding:"utf-8"}, (err))
 * It reads file synchronusly meand next line of code will not be excuted until and unless it is executed
 * 
 * 
 * fs.writeFile("filePath", "Content we want to write")
 * It is asynchronus means next line of code will execute if it takes time
 *
 * 
 * where as fs.writeFileSync("filePath", data)
 * It write file synchronusly meand next line of code will not be excuted until and unless it is executed
 * 
 * Both writeFile and writeFileSync overwrite the content written in file
 * To overcome this problem  we can use appendFile and appendFileSync 
 * 
 */