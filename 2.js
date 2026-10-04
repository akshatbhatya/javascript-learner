let arr= [34,45,56,72,1,3,5,6];

// let arr= [i,j,56,72,1,3,5,6];

for(let i=0 ; i < arr.length ; i++){   // outer loop i=0 

    // console.log(arr[i]);

    for(let j=i;j<arr.length;j++){  // inner loop   i=0 => j=i , j=0 
        if (arr[i]>arr[j+1]) {

            let temp = arr[i];  // 45

            arr[i]=arr[j+1];  
            arr[j+1]=temp;

        }

       
        
    }
    //  console.log(arr);
}

console.log(arr);
