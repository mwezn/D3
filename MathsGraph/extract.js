
const fs= require('fs')
var path =require('path');


const notesCSV = fs.readFileSync(path.resolve(__dirname, "BetHistory.csv"), "utf-8");
//console.log(notesCSV)
let arr= new Array(notesCSV)
let allBets=arr[0].split("\n")
let lastBet=arr[0].split("\n")[1].split(",")
const headings = arr[0].split("\n")[0].split(",")


//Use the following to remove brackets from losses column
//str.replace(/[{()}]/g, ''); 
lastBet[11]=lastBet[11].replace(/[()]/g, '-').slice(0,lastBet[11].length-1)
console.log(allBets)

let tidiedData=[]
for (let i=1;i<allBets.length;i++){
    //console.log(allBets[i].replace(/[()]/g, '-').slice(0,allBets[i].length-1))
    tidiedData.push(allBets[i].replace(/[()]/g, '-').slice(0,allBets[i].length-1))
}

fs.writeFileSync("cleanBetData.csv",tidiedData.join("\n") )

console.log(tidiedData.join("\n"))




