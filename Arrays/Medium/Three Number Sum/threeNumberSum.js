const testArray = [12, 3, 1, 2, -6, 5, -8, 6];
const testTargetSum = 0;

function threeNumberSum(array, targetSum) {
  result = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (i === j) continue;
      for (let k = j + 1; k < array.length; k++) {
        if (j === k) continue;
        if (array[i] + array[j] + array[k] === targetSum)
          result.push([array[i], array[j], array[k]]);
      }
    }
  }

  result.forEach(element => {
    for (let i = 0; i < element.length; i++) {
      for (let j = i + 1; j < element.length; j++) {
        if (i === j) continue;
        if (element[i] > element[j]) {
          element.unshift(element[j]);
          element.splice(j + 1, 1);
        }
      }
    }
  });

  for (let i = 0; i < result.length; i++) {
    for (let j = 0; j < result.length; j++) {
      for (let k = j + 1; k < result.length; k++) {
        if (result[j][i] > result[k][i]) {
          console.log(result[j], result[k]);
        }
      }
    }
  }

  return result;
}

threeNumberSum(testArray, testTargetSum);
