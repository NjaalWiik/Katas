const arrayOne = [-1, 5, 10, 20, 28, 3];
const arrayTwo = [26, 134, 135, 15, 17];

function smallestDifference(arrayOne, arrayTwo) {
  let result;
  let resultArr = [];
  arrayOne.forEach(elementOne => {
    arrayTwo.forEach(elementTwo => {
      const diff = elementOne - elementTwo;
      const absDiff = Math.abs(diff);
      if (result === undefined) {
        result = absDiff;
        resultArr = [elementOne, elementTwo];
      } else {
        if (result > absDiff) {
          result = absDiff;
          resultArr = [elementOne, elementTwo];
        }
      }
    });
  });
  return resultArr;
}

smallestDifference(arrayOne, arrayTwo);
