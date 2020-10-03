//Check if 2 words are anagrams of each other.
var o1 = "arms";
var o2 = "mars"
//Remove non-letter characters, and sort the letters in alphabetical order.
var n1 = o1.replace(/\W+/g,'').toLowerCase().split("").sort().join("");
var n2 = o2.replace(/\W+/g,'').toLowerCase().split("").sort().join("");
var isAnagram = n1==n2;
if(isAnagram) console.log("The two words are anagrams");
else console.log("The two words are not anagrams");
