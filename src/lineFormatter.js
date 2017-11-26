class LineFormatter {
  formatLine(object, longestWordLength) {
    const wordWithWhiteSpace = this.addWhiteSpace(
      object.word.toUpperCase(),
      longestWordLength
    );
    return `${wordWithWhiteSpace} | ${object.count}${
      object.isPrime ? ' | Prime!' : ''
    }`;
  }

  findLongestWordLength(arr) {
    const longestWord = arr.reduce((a, b) => {
      return a.word.length > b.word.length ? a : b;
    });
    return longestWord.word.length;
  }

  addWhiteSpace(word, longestWordLength = word.length) {
    const widthDifference = longestWordLength - word.length;
    if (widthDifference < 0) {
      throw new Error('width is less than 0!');
    }
    return new Array(widthDifference + 1).join(' ') + word;
  }

  formatLinesToString(array) {
    const longestWordLength = this.findLongestWordLength(array);
    return array
      .map(object => {
        return this.formatLine(object, longestWordLength);
      })
      .join('\n');
  }
}

module.exports = LineFormatter;
