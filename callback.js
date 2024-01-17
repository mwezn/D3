const tidyData = (data)=>{
    let a=[]

data.forEach(i=>{
    let obj={country:null, borders:[]}

    obj.country=i.name.common
    i.borders.forEach(d=>{
      //console.log(data.find(elem=>elem.cioc==d||elem.cca3==d)?data.find(elem=>elem.cioc==d||elem.cca3==d).name:"no")
      obj.borders.push(data.find(elem=>elem.cioc==d||elem.cca3==d)?data.find(elem=>elem.cioc==d||elem.cca3==d).name.common:"")

    })
    a.push(obj)
    
   
  })
  console.log(a)
  return a
}


