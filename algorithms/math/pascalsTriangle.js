function pascalTriangleRecursive(lineNumber) {
  if (lineNumber === 0) {
    return [1];
  }

  const currentLineSize = lineNumber + 1;
  const previousLineSize = currentLineSize - 1;

  const currentLine = [];

  const previousLine = pascalTriangleRecursive(lineNumber - 1);

  for (let numIndex = 0; numIndex < currentLineSize; numIndex += 1) {
    const leftCoefficient = numIndex - 1 >= 0 ? previousLine[numIndex - 1] : 0;
    const rightCoefficient =
      numIndex < previousLineSize ? previousLine[numIndex] : 0;

    currentLine[numIndex] = leftCoefficient + rightCoefficient;
  }

  return currentLine;
}
console.log(pascalTriangleRecursive(40));
