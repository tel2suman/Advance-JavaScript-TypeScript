

let vowels = "aeiou";

let wordstring = "We do touch by each others for better safety";

let vcount = 0;

let ccount = 0;

const chkVowels = (word)=>{

    for (let char of word) {

        vowels.includes(char.toLowerCase()) ? vcount ++ : ccount ++;
    }

    console.log("The Number of vowels are", (vcount),
        "The Number of consonents are", (ccount)
    );
}

chkVowels(wordstring);
