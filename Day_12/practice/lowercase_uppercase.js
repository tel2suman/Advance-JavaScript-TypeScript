
let str = "welcome to javascript"

let s = str.split('  ');

let newstr = s.map((varchar)=>{

    s[s.indexOf(varchar)] = (varchar.charAt(0)).toUpperCase() + varchar.slice(1) ;

    s.join(",");

    return s;
})

 console.log(newstr);
