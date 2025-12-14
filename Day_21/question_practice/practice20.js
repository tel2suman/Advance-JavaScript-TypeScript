
// Use slice() and substring() to extract the middle 3 characters of a given string.

let wordstring = "This is GeeksForGeeks";

const strCut = ()=>{

    console.log("extract by slice method", wordstring.trim().slice(13, 16));

    console.log("extract by substring method", wordstring.trim().substring(13, 16));
}

strCut();