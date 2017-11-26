const TextFormatter = require('./textFormatter');
const PrimeChecker = require('./primeChecker');

class WordFrequencyProcessor {
  constructor(
    textFormatter = new TextFormatter(),
    primeChecker = new PrimeChecker()
  ) {
    this.textFormatter = textFormatter;
    this.primeChecker = primeChecker;
  }
  processText(text) {
    const formattedWordArray = this.textFormatter.formatText(text);
    const arrayOfWords = this.addWordsScore(formattedWordArray);
    return this.checkForPrimes(arrayOfWords);
  }

  checkForPrimes(arrayOfWords) {
    const arrayWithPrimes = arrayOfWords.map(word => {
      word['isPrime'] = this.primeChecker.checkIfPrime(word.count);
      return word;
    });
    return arrayWithPrimes;
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
