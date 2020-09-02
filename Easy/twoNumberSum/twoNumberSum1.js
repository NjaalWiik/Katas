const twoNumberSum = (arr, targetInt) => {
  const result = [];
  for (i = 0; i < arr.length; i++) {
    let counter = 0;
    for (k = counter; k < arr.length; k++) {
      if ((k === i) | (result.length > 0)) {
        continue;
      }
      if (arr[k] + arr[i] === targetInt) {
        result.push(arr[i]);
        result.push(arr[k]);
        break;
      }
    }
  }
  return result;
};
