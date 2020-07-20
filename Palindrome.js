let word = "raCe car"

//convert to lowercase
//split into an arr of chars
//remove 'spaces'
function testPalindrome(str){
  let arr = str.toLowerCase()
  arr = arr.split('')
  for(i=0; i<arr.length; i++){
    if(arr[i]===' '){
      arr.splice(i, 1)
    }
  }
  check(arr)
}


//have 2 copies of the arr, one reversed
//loop to check if they match
function check(array){
  let originalArr = array.slice(0)
  console.log("original: "+ originalArr)
  let flipArr = array.reverse()
  console.log("flipped: "+flipArr)
  for (i = 0; i < originalArr.length; i++) {
    if (originalArr[i]!=flipArr[i]){
      console.log("not a palindrome")
      return
    }else if (originalArr[i]===flipArr[i]){
    console.log("there is a match: " + originalArr[i] + " matches "+ flipArr[i])
    }
  }
  console.log("this is a palindrome")
}

testPalindrome(word);
