
const fs= require('fs')
var path =require('path');


const notesCSV = fs.readFileSync(path.resolve(__dirname, "cleanBetData.csv"), "utf-8");
let arr= new Array(notesCSV)
let allBets=arr[0].split("\n")
console.log(allBets)
allBets.splice(0,1)
console.log(allBets)

let newarr=allBets.map(d=>d.split(",")[11])
let total=newarr.map(d=>Number(d))
console.log(newarr,total)
console.log(total.filter(d=>!isNaN(d)).reduce((a,b)=>a+b,0))
