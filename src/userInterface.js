const LineFormatter = require('./lineFormatter');
const WordFrequencyProcessor = require('./wordFrequencyProcessor');
const ArraySorter = require('./arraySorter');

class UserInterface {
  constructor(
    lineFormatter = new LineFormatter(),
    wordFrequencyProcessor = new WordFrequencyProcessor(),
    arraySorter = new ArraySorter(),
    logger = console
  ) {
    this.lineFormatter = lineFormatter;
    this.wordFrequencyProcessor = wordFrequencyProcessor;
    this.arraySorter = arraySorter;
    this.logger = logger;
  }

  getUniqueWordTable(string) {
    const processedText = this.wordFrequencyProcessor.processText(string);
    const sortedText = this.sortWordsByCount(processedText);
    return this.renderTable(sortedText);
  }

  sortWordsByCount(array) {
    return this.arraySorter.sortArray(array, 'count');
  }

  renderTable(arrayOfWords) {
    const finalTable = this.lineFormatter.formatLinesToString(arrayOfWords);
    this.logger.log(finalTable);
    return finalTable;
  }
}

module.exports = UserInterface;
