function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i = 0; i < array.length; i++) {
    const first = target - array[i];
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] === first) return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  0(n*2) since it has a nested loop
*/

/* 
  Add your pseudocode here
  iterate over the array given
  for each number, identify a complementary number that adds to the given target in the array
*/

/*
  Add written explanation of your solution here
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
