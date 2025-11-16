const NOTATION_KEYS = [ '', 'K', 'M', 'B', 'T', 'Q' ]

// WARNING: This currently does not support bigInt.
//          The game is not intended to go over e15 anyways (for now)
// TODO: Implement support before v1.0 release

export default function optimizeNumber (number : number, sci : boolean) : string {
  let numberString = number.toFixed(0).toString();
  const length = numberString.length;

  if (sci) {
    if (length > 4) {
      numberString = numberString[0] + '.' + numberString.slice(1,3);
      return `${numberString}e${length-1}`
    }
    return numberString;
  } else {
    const lengthMod = length % 3;
    const exception = (length - 1) % 3 == 0 && numberString[0] == '1';
    let notationKeyIndex = Math.ceil(length / 3) - 1;

    if(number < 2000) return numberString;

    let output = ''
    if (!exception) {
      output = numberString.slice(0, (lengthMod == 0 ? 3 : lengthMod));
      if (lengthMod != 0) {
        output += '.' + numberString.slice(lengthMod, 3);
      }
    } else {
      notationKeyIndex -= 1;
      output = numberString.slice(0, 4)
    }

    return `${output}${NOTATION_KEYS[notationKeyIndex]}`;
  }
}