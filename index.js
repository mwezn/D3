let PORT=3050
const fs= require('fs')
const express= require('express')
const app =express();
var path =require('path');
var bodyParser=require("body-parser")
app.use(bodyParser.urlencoded({extended: false}))



const countries = fs.readFileSync('all', "utf-8");
const countryJson= JSON.parse(countries)
app.use(express.static(path.join(__dirname, '')))


app.get('/', (req,res)=>{
    res.sendFile(__dirname+'/countries.html')
})

app.get('/all', (req, res)=>{
    res.json(countryJson)
})

app.listen(PORT,()=>{
  console.log("The Server is running on port:"+PORT)

})
