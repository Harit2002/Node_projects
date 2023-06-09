const sum = (a,b) => {
    console.log(a+b);
}

const multiply = (a, b) =>{
    console.log(a*b);
}

const dns = require('node:dns');
const fs = require('fs');
const cowSay = require('cowsay')


const writeToFile = (website) => {
    dns.lookup(website, (err, address, family) => {
        if(err) console.log(err);
        else fs.appendFileSync("./data.txt", `URL: ${website} | Address: ${address} | IPv${family}\n`);
    })
}

const readFromFile = (fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if(err) console.log(err);
        else console.log(data);
    })
}

const cowSayFile = (fileName) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if(err) {
            console.log(err);
            return;
        }
        console.log(cowSay.say({text : data}));
    })
    
}

//exporting module
module.exports = {sum, multiply, writeToFile, readFromFile, cowSayFile};

/**
 * We are using object because we don't want to export  modules in sequence
 * If we use array instead then we need to follow the proper sequence which can lead to errors
 */



