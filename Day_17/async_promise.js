
function hello() {
    return new Promise ((resolve)=>{
        setTimeout(()=>resolve("hello boys"),2000)
    });
}

async function hello1() {

    let res = await hello();

    console.log(res);

    return res;
}

console.log(hello1());