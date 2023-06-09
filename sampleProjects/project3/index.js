//importing module 
const {multiply,writeToFile, readFromFile, sum, cowSayFile} = require("./data");

let keyWord = process.argv[2];
let arg = process.argv[3];


if(keyWord == "write") {
    writeToFile(arg);
}

else if (keyWord == "read") {
    readFromFile(arg);
}

else if(keyWord == "delete") {
    
}

else if(keyWord == "cow") {
   cowSayFile(arg);
}

const os = require("os");

console.log(os.version())

// sum(1,2);
// multiply(2,3);

