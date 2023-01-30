function splitSearch(arr, target) {
  if (arr.length <= 1) return arr[0] === target;

  let lowIndex = 0;
  let highIndex = arr.length - 1;

  while(lowIndex <= highIndex) {
    const minIndex = Math.floor(lowIndex + highIndex) / 2;
    if (arr[minIndex] > target) {
      highIndex = minIndex - 1;
    } else if (arr[minIndex] < target) {
      lowIndex = minIndex + 1;
    } else {
      return minIndex
    }
  }

  return false;
}