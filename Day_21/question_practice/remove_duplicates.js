
//Remove duplicates from an array.

const removeDuplicates =(...val)=>{

    let numset = new Set (val);

    let unique = [...numset];

    console.log(unique);

}

removeDuplicates(10, 20, 30, 50, 40, 30, 60, 50, 90, 30);