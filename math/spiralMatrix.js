function getSpiralMatrix (n) {
  const matrix = []
  for (let i = 0; i < n; ++i) { matrix.push([]) }
  let counter = 1
  let startRow = 0
  let endRow = n - 1
  let startCol = 0
  let endCol = n - 1

  while (startCol <= endCol && startRow <= endRow) {
    for (let i = startCol; i <= endCol; ++i) {
      matrix[startRow][i] = counter
      counter++
    }
    startRow++

    for (let i = startRow; i <= endRow; ++i) {
      matrix[i][endCol] = counter
      counter++
    }
    endCol--

    for (let i = endCol; i >= startCol; --i) {
      matrix[endRow][i] = counter
      counter++
    }
    endRow--

    for (let i = endRow; i >= startRow; --i) {
      matrix[i][startCol] = counter
      counter++
    }
    startCol++
  }
  return matrix
}

const matrix = getSpiralMatrix(3)
console.log(matrix)
