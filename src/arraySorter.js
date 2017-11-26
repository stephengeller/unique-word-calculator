class ArraySorter {
  sortArray(array, key) {
    return array.sort((a, b) => {
      return a[key] - b[key];
    });
  }
}

module.exports = ArraySorter;
