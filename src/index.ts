export default function sub(sentence: string, init: number, initForward = false, end?: number, endForward = true): string {
  if (init > 0) {
    while (_isAlphaNumeric(sentence.charCodeAt(init))) {
      initForward ? init++ : init--;
    }
  }
  if (end) {
    while (_isAlphaNumeric(sentence.charCodeAt(end))) {
      endForward ? end++ : end--;
    }
  }
  return sentence.substring(init, end).trim();
}

function _isAlphaNumeric(_charCode: number) {
  if (!(_charCode > 47 && _charCode < 58) && // numeric (0-9)
    !(_charCode > 64 && _charCode < 91) && // upper alpha (A-Z)
    !(_charCode > 96 && _charCode < 123)) { // lower alpha (a-z)
    return false;
  }
  return true;
};