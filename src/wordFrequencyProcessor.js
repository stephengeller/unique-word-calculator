const TextFormatter = require('./textFormatter');

class WordFrequencyProcessor {
  constructor(textFormatter = new TextFormatter()) {
    this.textFormatter = textFormatter;
  }
  processText(text) {
    const formattedWordArray = this.textFormatter.formatText(text);
    return this.addWordsScore(formattedWordArray);
  }

  addWordsScore(array) {
    const wordsWithCounts = [];
    for (let i = 0; i < array.length; i++) {
      let word = array[i];
      let exists = false;
      for (let j = 0; j < wordsWithCounts.length; j++) {
        if (word === wordsWithCounts[j].word) {
          wordsWithCounts[j].count += 1;
          exists = true;
        }
      }
      if (!exists) {
        wordsWithCounts.push({
          word,
          count: 1
        });
      }
    }
    return wordsWithCounts;
  }
}

module.exports = WordFrequencyProcessor;
