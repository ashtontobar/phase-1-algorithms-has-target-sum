
function hasTargetSum(array, target) {
  for (let i = 0; i < array.length; i++) {
    const difference = target - array[i]

    for (let j = i +1; j < array.length; j++){
      if(array[j] === difference) {
        return true
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
  0(n * n)
*/

/* 
  takes an argument of an array of numbers &
  an argument with a target number

  the function should return TRUE if any combo (pair) of numbers w/in 
  the array & === the target number

  example: 
  array = [2, 3, 7, 15, 28] 
  target number = 10
  the function will return TRUE because 3 + 7 === 10 (the target number)
  
  else returns false
*/

/*
  Add written explanation of your solution here
  first we iterate over the array (i)
  next we set a variable to find the difference between the target number & i 
    => we set this to see if there is a number w/in the array that matches, if yes then
    => that means i plus the number that matches the difference === the target number
  then we need to iterate over the array again to see if there is a # (j) that matches difference
  if j === difference then return true 
    => iterate over the entire array
  if none of the numbers in the array match the difference then return false 

  ex: using first test below 
    array = [3, 8, 12, 4, 11, 7]
    target = 10

  first iteration i = 3
  the variable gets set: 10 (target) - 3 (i) = 7 (difference)
  iterate through the array again to find j
    => iterates through the entire array, until it hits the last #, 7 which matches
    => returns true
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
