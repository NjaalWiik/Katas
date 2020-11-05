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

    startCol++;
    endCol--;
    startRow++;
    endRow--;
  }

  console.log(result);
}

const testArray = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7]
];

spiralTraverse(testArray);
