function vigenere(plaintext, key) {
  const upperKey = key.toUpperCase();
  let decryptedMessage = '';
  for (let i = 0, keyIndex = 0; i < plaintext.length; keyIndex += 1, i += 1) {
    const char = plaintext.charCodeAt(i);
    const keyCode = upperKey.charCodeAt(keyIndex % upperKey.length);
    if (char >= 97 && char <= 122) {
      const index = ((char - 97 + keyCode - 65) % 26);
      decryptedMessage += String.fromCharCode(index + 97);
    } else if (char >= 65 && char <= 90) {
      const index = ((char - 65 + keyCode - 65) % 26);
      decryptedMessage += String.fromCharCode(index + 65);
    } else {
      keyIndex -= 1;
      decryptedMessage += String.fromCharCode(char);
    }
  }
  return decryptedMessage;
}

console.log(vigenere('The quick brown fox jumps over the lazy dog.', 'key')); // Dlc aygmo zbsux jmh nswtq yzcb xfo pyjc byk.
