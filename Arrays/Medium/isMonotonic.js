const array = [1, 2];

function isMonotonic(array) {
  let monoPos = true;
  for (let i = 1; i < array.length; i++) {
    if (!(array[i - 1] <= array[i])) {
      monoPos = false;
    }
  }
  let monoNeg = true;
  for (let i = 1; i < array.length; i++) {
    if (!(array[i - 1] >= array[i])) {
      monoNeg = false;
    }
  }
  return monoPos || monoNeg ? true : false;
}

isMonotonic(array);
