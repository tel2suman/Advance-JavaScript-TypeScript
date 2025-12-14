
// Flatten a nested array (e.g., [1,[2,3],[4]] → [1,2,3,4]).

let arrlist = [1, [2 ,3] ,[4]];

let flatten = arrlist.flat(Infinity);

console.log(flatten);