class ArraySorter {
  sortArray(array, key) {
    return array.sort((a, b) => {
      if (a[key] === undefined || b[key] === undefined) {
        throw new Error('that key does not exist');
      }
      return a[key] - b[key];
    });
  }
}

module.exports = ArraySorter;
