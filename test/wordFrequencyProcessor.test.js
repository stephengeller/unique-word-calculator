const WordFrequencyProcessor = require('../src/wordFrequencyProcessor');

describe('wordFrequencyProcessor', () => {
  let wordFrequencyProcessor;
  const textFormatter = {
    formatText: jest.fn(text => text)
  };
  const primeChecker = {
    checkIfPrime: jest.fn()
  };
  beforeEach(() => {
    wordFrequencyProcessor = new WordFrequencyProcessor(
      textFormatter,
      primeChecker
    );
  });

  describe('#addWordsSCore', () => {
    it('returns an array of objects with the word and their count', () => {
      expect(
        wordFrequencyProcessor.addWordsScore(['hello', 'hello', 'world'])
      ).toEqual([{ word: 'hello', count: 2 }, { word: 'world', count: 1 }]);
    });
  });

  describe('#processText', () => {
    beforeEach(() => {
      wordFrequencyProcessor.processText(['hello', 'hello', 'world']);
    });
    it('calls the textFormatter to get words', () => {
      expect(textFormatter.formatText).toHaveBeenCalledWith([
        'hello',
        'hello',
        'world'
      ]);
    });
  });
});
