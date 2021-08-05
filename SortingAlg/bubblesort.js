const sleep = (milliseconds) => {
    return new Promise(resolve => setTimeout(resolve, milliseconds))
  }
async function bubbleSort(array) {
    let n=array.length;
    let i=0;
    for (i;i<n;i++){
      for(let j=i+1;j<n+i;j++){
        await sleep(1000)
        let a=array[i]
        let b=array[j]
        console.log(a,b)
        if (b<a) {
          array[i]=b
          array[j]=a
        }
       }
    }
    return array
 }
  
  console.log(bubbleSort([3,2,3,21,89,12]))