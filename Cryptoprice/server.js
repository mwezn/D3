let PORT=3050
const fs= require('fs')
const express= require('express')
const app =express();
const routes = require('./route') // includes the routes.js file
var path =require('path');
const cors= require('cors')
var bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())



const notesCSV = fs.readFileSync(path.resolve(__dirname, "../MathsGraph/BetHistory.csv"), "utf-8");
console.log(notesCSV)
let arr= new Array(notesCSV)
console.log(arr[0].split("\n"))
const [week,tree] = arr[0].split("\n")[0].split(",")
console.log(week,tree)



app.use(express.json()) 
app.use(routes) 
app.use(express.static(path.join(__dirname, '')))
app.listen(PORT,()=>{
  console.log("The Server is running on port:"+PORT)

})


