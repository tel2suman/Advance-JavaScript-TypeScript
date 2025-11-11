
// Write a program to find all even numbers from an array using filter().

const evenShow = (...even)=> {

    return even.filter((item)=>{

        return item % 2 === 0;
    })
}

console.log(evenShow(5, 3, 2, 1, 3, 4));