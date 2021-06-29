export default function sub(s: string, n: number, nextWord = true) {
  while (_isAlphaNumeric(s.charCodeAt(n))) {
    nextWord ? n++ : n--;
  }
  return s.substring(0, n);
}

function _isAlphaNumeric(_charCode: number) {
  if (!(_charCode > 47 && _charCode < 58) && // numeric (0-9)
    !(_charCode > 64 && _charCode < 91) && // upper alpha (A-Z)
    !(_charCode > 96 && _charCode < 123)) { // lower alpha (a-z)
    return false;
  }
  return true;
};