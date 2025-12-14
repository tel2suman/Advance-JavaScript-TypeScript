// Group array elements by frequency.

arrlist = [1, 2, 3, 2, 1, 2, 3, 1];

let count = 0;

const frequency =(arr, item)=>{

    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === item) {

            count++;
        }
    }

    console.log(count);
}

frequency(arrlist, 2);