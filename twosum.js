//Given an array of integers, return indices of the two numbers such that they add up to a specific target.
//return all scenerios

//brute force method

function getSum(arr, target){
  for (i = 0; i < arr.length; i++) {
    for(j = 1; j < arr.length-1; j++){
      let sum = arr[i] + arr[j]
      if(sum!= target){
        // console.log("NOT A MATCH: "+ arr[i] +" + " + arr[j])
      } else if(sum === target)  {
        console.log("we have a match: "+ arr[i] +" + " + arr[j])
      }
    }
  }
}

let arr = [1, 2, 3, 4, 5, 6, 7, 9]
let target = 10

getSum(arr, target)
