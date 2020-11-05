function spiralTraverse(array) {
  const result = [];

  let startCol = 0;
  let endCol = array[0].length - 1;
  let startRow = 1;
  let endRow = array.length - 1;

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; i++) {
      result.push(array[startCol][i]);
    }

    for (let i = startRow; i <= endRow; i++) {
      result.push(array[i][endCol]);
    }

    for (let i = endCol - 1; i >= startCol; i--) {
      result.push(array[endRow][i]);
    }

    for (let i = endRow - 1; i >= startRow; i--) {
      result.push(array[i][startCol]);
    }

    startCol++;
    endCol--;
    startRow++;
    endRow--;
  }

  return result;
}

const testArray = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];

spiralTraverse(testArray);
