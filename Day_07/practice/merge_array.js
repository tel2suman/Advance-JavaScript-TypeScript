
let firstarr = [15, 35, 20, 55, 65, 70, 89, 100];

let secondarr = [20, 35, 50, 55, 75, 89, 30, 100];

let mergearr = [...firstarr,...secondarr];

//let mergearr = firstarr.concat(firstarr,secondarr);

const mergeArray =()=> {

    let newarr = mergearr.filter((val , index)=>{

        if (mergearr.indexOf(val) == index) {

            return true;

        } else {

            return false;
        }

    })

    console.log(`The newly returned array is`, newarr);
}

mergeArray();