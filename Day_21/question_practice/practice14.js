let sentence = "ollah";

//reversing a string

const chkReverse = (sentence) => {
  return [...sentence].reverse().join("");
};

const chkPalin = (str) => {

  let reverse_str = str;

  reverse_str === chkReverse(str)
    ? console.log("Yes! the string is palindrome", str)
    : console.log("No, it's not palindrome!", str);
};

chkPalin(sentence);
