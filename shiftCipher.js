class ShiftCipher {
    constructor(shift) {
        this.shift = shift;
    }
    
    get getShift() {
        return this.shift;
    }

    encrypt(text) {
        let textUpper = text.toUpperCase();      
        let textArr = [];
        for (let index in textUpper) { 
            let letter = textUpper[index];
            if (/[A-Z]/.test(letter)) {
                let charCode = textUpper.charCodeAt(index) + this.shift;
                if (charCode >= 65 && charCode <= 90) {
                    textArr.push(String.fromCharCode(charCode));
                } else {
                    textArr.push(String.fromCharCode(charCode-26));
                }
            } else {
                textArr.push(letter);
            }
        }
        console.log(textArr.join(''));
    }

    decrypt(text) {
        let textLower = text.toLowerCase();      
        let textArr = [];
        for (let index in textLower) { 
            let letter = textLower[index];
            if (/[a-z]/.test(letter)) {
                let charCode = textLower.charCodeAt(index) - this.shift;
                if (charCode >= 97 && charCode <= 122) {
                    textArr.push(String.fromCharCode(charCode));
                } else {
                    textArr.push(String.fromCharCode(charCode+26));
                }

            } else {
                textArr.push(letter);
            }
        }
        console.log(textArr.join(''));
    }
}

// Test class
const cipher = new ShiftCipher(2);
cipher.encrypt('I love to code!'); // returns 'K NQXG VQ EQFG!'
cipher.decrypt('K <3 OA RWRRA'); // returns 'i <3 my puppy'

const cipherOneLetter = new ShiftCipher(1);
cipherOneLetter.encrypt('Z'); // returns 'A'