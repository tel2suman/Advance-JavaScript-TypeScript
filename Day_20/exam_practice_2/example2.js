
let a = "i am a good boy";

let b = "aeiou";

let c = [];

const vowelFind=(item)=> {

    for (let i of item) {

        if (b.includes(i)) {
            c.push(i)
        }
    }

    console.log(c);
}

vowelFind(a);