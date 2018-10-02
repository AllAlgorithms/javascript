function quickSort (recievedArray) {
  const sortedArray = Object.assign([], recievedArray)

  function partition (array, begin, end) {
    const pivot = array[Math.floor((end + begin) / 2)]
    let i = begin
    let j = end

    while (i <= j) {
      while (array[i] < pivot) {
        i++
      }

      while (array[j] > pivot) {
        j--
      }

      if (i <= j) {
        swap(array, i, j)
        i++
        j--
      }
    }

    return i
  }

  function sort (array, begin, end) {
    let index

    if (array.length > 1) {
      index = partition(array, begin, end)

      if (begin < index - 1)
        sort(array, begin, index - 1)

      if (index < end)
        sort(array, index, end)
    }

    return array
  }

  function swap (array, firstIndex, secondIndex) {
    const temp = array[firstIndex]
    array[firstIndex] = array[secondIndex]
    array[secondIndex] = temp
  }

  return sort(sortedArray, 0, sortedArray.length - 1)
}

const array = [3, 2, 9, 7, 24, 11]

const sortedArray = quickSort(array)

console.log('array', array)
console.log('sortedArray', sortedArray)
