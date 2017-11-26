const LineFormatter = require('./lineFormatter');
const WordFrequencyProcessor = require('./wordFrequencyProcessor');
const ArraySorter = require('./arraySorter');

class UserInterface {
  constructor(
    lineFormatter = new LineFormatter(),
    wordFrequencyProcessor = new WordFrequencyProcessor(),
    arraySorter = new ArraySorter()
  ) {
    this.lineFormatter = lineFormatter;
    this.wordFrequencyProcessor = wordFrequencyProcessor;
    this.arraySorter = arraySorter;
  }

  processText(string) {
    const processedText = this.wordFrequencyProcessor.processText(string);
    const sortedText = this.sortWordsByCount(processedText);
    return this.renderTable(sortedText);
  }

  sortWordsByCount(array) {
    return this.arraySorter.sortArray(array, 'count');
  }

  renderTable(arrayOfWords) {
    return arrayOfWords
      .map(object => {
        return this.lineFormatter.formatLine(object);
      })
      .join('\n');
  }
}

module.exports = UserInterface;
