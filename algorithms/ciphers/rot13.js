// JavaScript implementation of ROT13
//
// Author: NIEZWAN ABDUL WAHID

function rot13(str) {
  var string = [];

  for (var i = 0; i < str.length; i++) {
     if ((str.charCodeAt(i) > 77 && str.charCodeAt(i) <= 90) || (str.charCodeAt(i) > 109 && str.charCodeAt(i) <= 122)) {
      string.push(String.fromCharCode(str.charCodeAt(i) - 13));
    } else {
      string.push(String.fromCharCode(str.charCodeAt(i) + 13));
    }
  }
  return string.join("");
}

// rot13("hello") == "uryyb"