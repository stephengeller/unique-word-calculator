const WordFrequencyProcessor = require('../src/wordFrequencyProcessor');

describe('wordFrequencyProcessor', () => {
  let wordFrequencyProcessor;
  const textFormatter = {
    formatText: jest.fn()
  };
  beforeEach(() => {
    wordFrequencyProcessor = new WordFrequencyProcessor(textFormatter);
  });

  describe('#addWordsSCore', () => {
    it('returns an array of objects with the word and their count', () => {
      expect(
        wordFrequencyProcessor.addWordsScore(['hello', 'hello', 'world'])
      ).toEqual([{ word: 'hello', count: 2 }, { word: 'world', count: 1 }]);
    });
  });
});