
// Write a program to merge two arrays and remove duplicates.

const mergeDuplicates =(arr1, arr2)=>{

    let uniquearr = new Set([...arr1,...arr2]);

    console.log(uniquearr);
}

mergeDuplicates(
  [15, 35, 20, 55, 65, 70, 89, 100],
  [20, 35, 50, 55, 75, 89, 30, 100]
);
