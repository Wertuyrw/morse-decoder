const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    const letters = expr.match(/.{1,10}/g);
    
    const decodedMessage = letters.map(letter => {
        if (letter === '**********') {
            return ' ';
        }
        
        let morseChar = '';
        for (let i = 0; i < letter.length; i += 2) {
            const pair = letter.slice(i, i + 2);
            if (pair === '10') {
                morseChar += '.';
            } else if (pair === '11') {
                morseChar += '-';
            }
        }
        
        return MORSE_TABLE[morseChar] || '';
    });
    
    return decodedMessage.join('');
}

module.exports = {
    decode
}