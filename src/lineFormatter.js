class LineFormatter {
  formatLine(object) {
    return `${object.word} | ${object.count} | ${object.isPrime}`;
  }

  formatLinesToString(array) {
    return array
      .map(object => {
        return this.formatLine(object);
      })
      .join('\n');
  }
}

module.exports = LineFormatter;
