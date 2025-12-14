
//Rotate an array by k positions (left or right).

let arrlist = [2, 3, 5, 6, 8, 10];

const rotationOnRight =()=>{

    for (let i = 1; i < arrlist.length; i++) {

      let rotatevalue = arrlist.pop();

      arrlist.unshift(rotatevalue);

      console.log(rotatevalue);
    }
}

rotationOnRight();
