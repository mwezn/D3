
const min =(arr)=>{
    let min= Infinity;
    let n=arr.length;
    let i=0;
    for (i;i<n;i++){
        if (arr[i]<min) min=arr[i]
    }
    return min;
}

async function bubbleSort(array) {
    let steps=0;
    let s=document.getElementById("steps")
    let n=array.length;
    let newarr=[...array]
    let i=0;
    for (i;i<n;i++){
      for(let j=i+1;j<n+i;j++){
        s.innerHTML=""
        s.innerHTML=steps;
        await sleep(5)
        let a=newarr[i]
        let b=newarr[j]
        console.log(a,b)
        if (b<a) {
          steps++;
          newarr[i]=b
          steps++
          newarr[j]=a
          shift(newarr)
        }
       }
    }
    //return array
 }

async function selectionSort(array) {
  let steps=0;
  
  let s=document.getElementById("steps")
  let newarr=[...array]
  let n=array.length;
  for (let i=0;i<n;i++){
    
    s.innerHTML=""
    s.innerHTML=steps;
    await sleep(100)
    let a=newarr[i]
    let tmp=newarr.slice(i,n)
    let cut=newarr.lastIndexOf(min(tmp))
    newarr[i]=min(tmp)
    steps++;
    newarr[cut]=a
    steps++;
    shift2(newarr)
  }
  //return newarr;
}
