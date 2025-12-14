
let word = "noon";

//reverse a string

const chkReverse = (word)=>{

    return [...word].reverse().join("");
}

// cheking it is palindrome or not

const isPalindrome =(str)=>{

    let reverse_str = chkReverse(str);

    reverse_str === str
      ? console.log("yes! passed string is palindrome: output is:", str)
      : console.log("Sorry! passed string is not palindrome: output is", str);
}

isPalindrome(word);