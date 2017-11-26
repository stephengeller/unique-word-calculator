class LineFormatter {
  formatLine(object) {
    return `${object.word.toUpperCase()} | ${object.count}${
      object.isPrime ? ' | Prime!' : ''
    }`;
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
