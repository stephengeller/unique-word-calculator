const LineFormatter = require('../src/lineFormatter');

describe('LineFormatter', () => {
  let lineFormatter;
  beforeEach(() => {
    lineFormatter = new LineFormatter();
  });
  describe('formatLine', () => {
    it('returns a string of the object word', () => {
      expect(lineFormatter.formatLine({ word: 'hello', count: 4 })).toEqual(
        'hello|4'
      );
    });
  });
});
