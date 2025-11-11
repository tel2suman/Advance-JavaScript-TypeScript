
let arr1 = [1, 2, 3];

let arr2 = [2, 3, 4];

const mergeArray =(arr1,arr2)=>{

    let arr3 = [...arr1, ...arr2];

    let newarr = arr3.filter((val,index)=>{

        if (arr3.indexOf(val)!== index) {

            return true;

        } else {

            return false;
        }

    })

    console.log(`the newly returned array is`, newarr)
}

mergeArray(arr1,arr2);