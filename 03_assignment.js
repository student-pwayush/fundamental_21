function findcharacterClass(str) {

const digitRegex = /\d/g;
const uppercaseRegex = /[A-Z]/g;
const lowercaseRegex = /[a-z]/g;
const specialRegex = /[^A-Za-z0-9]/g;

const digits = str.match(digitRegex) || [];
const uppercaseLetters = str.match(uppercaseRegex) || []; 
const lowercaseLetters = str.match(lowercaseRegex) || [];
const specialcharacters = str.match(specialRegex) || [];


    return {
        digits,
        uppercaseLetters,
        lowercaseLetters,
        specialcharacters

    };

}

const samplestring = "Hello123! How are you?";
const matches = findcharacterClass(samplestring);

console.log("Digits:", matches.digits);
console.log("Uppercase Letters:", matches.uppercaseLetters); 
console.log("Lowercase Letters:", matches.lowercaseLetters);
console.log("Special Characters:", matches.specialcharacters);