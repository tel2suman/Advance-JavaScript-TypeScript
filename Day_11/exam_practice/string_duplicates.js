
let str = "programming";

const removeDuplicates=()=>{

        let charArr = str.split('');

        let uniqueChar = [...new Set(charArr)];

    return uniqueChar.join('');

}

console.log(removeDuplicates());