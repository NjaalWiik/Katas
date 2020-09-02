const testArray = [5, 1, 22, 25, 6, -1, 8, 10];
const testSequence = [1, 6, -1, 10];

function isValidSubsequence(array, sequence) {
  let counter = 0;
  let valArray = [];
  for (let i = 0; i < sequence.length; i++) {
    for (let j = counter; j < array.length; j++) {
      if (sequence[i] === array[j]) {
        valArray.push(sequence[i]);
        counter = j + 1;
        break;
      }
    }
  }
  return valArray.length === sequence.length ? true : false;
}

isValidSubsequence(testArray, testSequence);
