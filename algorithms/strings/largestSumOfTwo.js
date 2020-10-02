function topSum(arr){
  
  var biggest = arr[0], 
      second = arr[1], 
      len = arr.length, 
      i = 2;

  if (len<2) return null;
  
  if (biggest<second){
    biggest = arr[1];
    second = arr[0];
  } 
  
  for(; i<len; i++){

   if(arr[i] > biggest){
      second = biggest;
      biggest = arr[i];
    }
   else if (arr[i]>second){
      second = arr[i];
   }
    
 }
 return biggest + second;
}

topSum([5, 2, 6, 1, 3]);