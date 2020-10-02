const pigLatin = str => {
  const vows = ['a', 'e', 'i', 'o', 'u'],
        res = str.split('') 
  
  if(vows.includes(str.charAt(0))) {
    return str += 'way'
  } else {
    for(let i = 0; i < str.length; i++) {
      if(!vows.includes(str[i])) {
        res.push(res.shift())
      } else {
        res.push('ay')
        return res.join('') 
      }
    }
  }
}