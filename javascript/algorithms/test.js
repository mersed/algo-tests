function matrix(n) {
   let matrix = [];
   let startRow = 0;
   let endRow = n-1;
   let startColumn = 0;
   let endColumn = n-1;
   let counter = 1;

   for(let i=0; i<n; i++) {
      matrix[i] = [];
   }

   while(startRow <= endRow && startColumn <= endColumn) {
      // First row
      for(let i=startColumn; i<=endColumn; i++) {
         matrix[startRow][i] = counter;
         counter++;
      }
      startRow++;

      // Last column
      for(let i=startRow; i<=endRow; i++) {
         matrix[i][endColumn] = counter;
         counter++;
      }
      endColumn--;

      // Last row
      for(let i=endColumn; i>=startColumn; i--) {
         matrix[endRow][i] = counter;
         counter++;
      }
      endRow--;

      // First column
      for(let i=endRow; i>=startRow; i--) {
         matrix[i][startColumn] = counter;
         counter++;
      }
      startColumn++;
   }

   for(let i=0; i<matrix.length; i++) {
      console.log(matrix[i]);
   }
}


matrix(1);


/*


0  1  2  3

1  2  3  4     0
12 13 14 5     1
11 16 15 6     2
10 9  8  7     3


*/