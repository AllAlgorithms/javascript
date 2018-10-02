// Author: Ferdhika Yudira
// Palindrome

var isPalindrome = function (text){
    text = text.split('');
	index=0;
	palindrom=true;
	
	pTeks=text.length;
	
	i=0;
	while((i<pTeks/2) && (palindrom===true)){
		if(text[index]==text[pTeks-1]){
			index++;
			pTeks--;
		}else{
			palindrom=false;
		}
		
		i++;
	}
	
	return palindrom;
} 

// test
var cases = "ada apa dengan kakak kakak lari sejak malam ada ada saja";

cases.split(" ").map(function(res, i){
    console.log(res+" : isPalindrom? "+isPalindrome(res));
});