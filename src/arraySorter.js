class ArraySorter {
  sortArray(array, key) {
    return array.sort((a, b) => {
      return b[key] - a[key];
    });
  }
}

module.exports = ArraySorter;
