const TextFormatter = require('../src/textFormatter');

describe('TextFormatter', () => {
  let textFormatter;
  beforeEach(() => {
    textFormatter = new TextFormatter();
  });

  describe('#removePunctuation', () => {
    it('replaces punctuation with nothing', () => {
      expect(
        textFormatter.removePunctuation('hello! this, is; some punctuation')
      ).toEqual('hello this is some punctuation');
    });
  });

  describe('#splitText', () => {
    it('splits text by whitespace into array of lowercase words', () => {
      expect(textFormatter.splitText('HelLLooo WorllldD')).toEqual([
        'helllooo',
        'worllldd'
      ]);
    });
  });

  describe('#formatTextToArray', () => {
    it('returns lowercase array without punctuation', () => {
      expect(
        textFormatter.formatTextToArray('HelLLooo!! ;;W.orl,lldD')
      ).toEqual(['helllooo', 'worllldd']);
    });
  });
});
