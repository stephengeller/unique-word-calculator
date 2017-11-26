class ArraySorter {
  sortArray(array, key) {
    if (array[0][key] === undefined) {
      throw new Error('that key does not exist');
    }
    return array.sort((a, b) => {
      return a[key] - b[key];
    });
  }
}

module.exports = ArraySorter;
