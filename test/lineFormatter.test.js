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
});
