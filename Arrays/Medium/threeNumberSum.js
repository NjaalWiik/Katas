// Write a function that takes in a non-empty array of distinct integers and an integer representing a target sum. The
// function should find all triplets in the array that sum up to the target sum and return a two-dimensional array of all
// these triplets.

// The numbers in each triplet should be ordered in ascending order, and the triplets themselves should be ordered in ascending order with respect to the numbers they hold.

// If no three numbers sum up to the target sum, the function should return an empty array.

const testArray = [12, 3, 1, 2, -6, 5, -8, 6];
const testTargetSum = 0;

function threeNumberSum(array, targetSum) {
  const result = [];
  const sortedArray = array.sort(function (a, b) {
    return a - b;
  });

  for (let i = 0; i < sortedArray.length - 2; i++) {
    let left = i + 1;
    let right = sortedArray.length - 1;

    while (left < right) {
      const tripletSum =
        sortedArray[i] + sortedArray[left] + sortedArray[right];
      if (tripletSum === targetSum) {
        result.push([sortedArray[i], sortedArray[left], sortedArray[right]]);
        left += 1;
        right -= 1;
      } else if (tripletSum < targetSum) {
        left += 1;
      } else if (tripletSum > targetSum) {
        right -= 1;
      }
    }
  }
  return result;
}

threeNumberSum(testArray, testTargetSum);
