const arr = [1, 10, 3, 4, 1, 28, 24, 10];
let dupArr = []

function checkDup(arr) {
    let counter = [];
    //use the index of the counter array to determine if it exist
    for (var i = 0; i <= arr.length; i++) {
        if (counter[arr[i]] === undefined) {
            counter[arr[i]] = 1;
            // console.log(counter)
        } else {
            dupArr.push(arr[i])
            console.log(dupArr)
            // OR return true if not getting the actual numbers
        }
    }
    // return false;
}

if (checkDup(arr)) {
  console.log("these numbers are dups! "+dupArr)
}
