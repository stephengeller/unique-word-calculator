const LineFormatter = require('../src/lineFormatter');

describe('LineFormatter', () => {
  let lineFormatter;
  beforeEach(() => {
    lineFormatter = new LineFormatter();
  });
  describe('formatLine', () => {
    it('returns a string of the capitalised object word, count and prime ', () => {
      expect(
        lineFormatter.formatLine({ word: 'hello', count: 4, isPrime: true })
      ).toEqual('HELLO | 4 | Prime!');
    });
  });

  describe('formatLinesToString', () => {
    it('formats an array into string lines', () => {
      expect(
        lineFormatter.formatLinesToString([
          { word: 'hello', count: 4, isPrime: false },
          { word: 'world', count: 3, isPrime: true }
        ])
      ).toEqual('HELLO | 4\n' + 'WORLD | 3 | Prime!');
    });
  });

  describe('findLongestWordLength', () => {
    it('finds length of longest word in array of word objects', () => {
      expect(
        lineFormatter.findLongestWordLength([
          { word: 'longword', count: 4, isPrime: false },
          { word: 'short', count: 3, isPrime: true }
        ])
      ).toEqual(8);
    });
  });

  describe('#addWhiteSpace', () => {
    it('adds whitespace before a word based on biggest word length', () => {
      expect(lineFormatter.addWhiteSpace('four', 7)).toEqual('   four');
    });
    it('throws error if difference between words is negative', () => {
      expect(() => {
        lineFormatter.addWhiteSpace('thishasmorethan5characters', 5);
      }).toThrow('width is less than 0!');
    });
  });
});
