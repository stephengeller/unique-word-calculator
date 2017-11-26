class LineFormatter {
  formatLine(object) {
    return `${object.word}|${object.count}`;
  }
}

module.exports = LineFormatter;
