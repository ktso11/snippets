/*
Here’s how the ID code is derived:

CA: First 2 characters of the employee’s last name.
JI: First 2 characters of the employee’s first name.
2020: Full year of joining.
02: 2 digit representation of the month of joining.
19: Indicates that this is the 19th employee who joined in Feb 2020.
This will have at least 2 digits, starting with 01, 02, and so on.
6: The last digit is a verification digit which is computed as follows:
Take the numeric part of the ID code (without the verification digit).
Sum all digits in odd positions. Say this is O.
Sum all digits in even positions. Say this is E.
Difference between O & E. Say this is V.
If V is negative, ignore the sign, e.g., -6 is treated as 6. Say this is V.
If V is greater than 9, divide it by 10 and take the reminder. Say this is V.
V is the verification code.
For the above ID card, here’s how you‘ll test the verification digit.

CAJI202002196 # ID code
202002196 # Numeric part
20200219 # Ignoring verification digit
2 + 2 + 0 + 1 = 5 # Sum of odd position digits, i.e. O
0 + 0 + 2 + 9 = 11 # Sum of even position digits, i.e. E
5 - 11 = -6 # V = O - E
6 # Verification digit, ignoring sign
An ID code is considered valid if:

The first 4 characters of the card are correct, i.e. CAJI.
The verification digit is correct, i.e. 6.
Problem
Write a command-line program in your preferred coding language that:
Allows the user to enter their First name, Last name and ID code.
Prints PASS if the ID code seems valid.
Prints INVESTIGATE otherwise.
*/


let even = []
let odd = [];
let vCode 
const employees = [
  {
    firstName: "John",
    lastName: "Smith",
    dateJoined: "01012000"
  },
  {
    firstName: "Jane",
    lastName: "Doe",
    dateJoined: "02022020"
  }
]

// var employeeCode = new Date()
// var day = employeeCode.getDate()
// var month = employeeCode.getMonth()
// var year = employeeCode.getYear()
// let employeeJoined= employees[0].dateJoined


 function verificationCode(num, id){
   console.log(num.length)
    for (i = 0; i < num.length; i++) {
      //grouping # based on even/odd index
      if(i % 2 != 0) {
        even.push(num[i]) 
      } else {
        odd.push(num[i])
      }    
    }
   sumVerificationDigit(even, odd, id)
 }

//sum of arr
function arrSum(total, num) {
  return total - num;
}

//converting to int/number, and sum arr
function sumVerificationDigit(eArr, oArr, id){
  even = eArr.map(Number)
  odd = oArr.map(Number)
  sumEven = eArr.reduce(arrSum)
  sumOdd = oArr.reduce(arrSum)
  vCode = sumOdd - sumEven 
  console.log(vCode)
  let finalv 
  
  if(vCode <= 0){
    finalverification = vCode.toString()
    //remove the "-" from the string
    finalv = finalverification.substr(1);
    finalv = parseInt(finalv)
    console.log(finalv)
    //if multiple of 10, take the first digit
  } if(vCode%10 == 0) {
    //convert to string and take the index of 0
    finalv = vCode.toString()[0];
    console.log("multiple of 10: " +finalv)
  } 
  else if (vCode > 9) {
    getRemainder = vCode/10
    finalv = getRemainder.toString()[2];
    console.log("over 9: " + finalv)
  } else {
    vCode = finalv
    console.log("same id, no need to convert: " + finalv)
  }
  finalVerification(finalv, id)
}

function finalVerification(cal, id) {
  if (cal === id){
    console.log('ID match')
  } else {
    console.log("ID NOT MATCH")
  }
}

function checkv(first, last, id) {
  for (i = 0; i < employees.length; i++) {
    if(employees[i].firstName === first && employees[i].lastName === last){
      verificationCode(employees[i].dateJoined, id)
      console.log("Names match, checking ID of : " + id) 
    } else {
      console.log("INVESTIGATE")
    }
  }
}

let first = "Jane"
let last = "Doe"
let idNum = 4
checkv(first, last, idNum)
