const TextFormatter = require('../src/textFormatter');

describe('TextFormatter', () => {
  let textFormatter;
  beforeEach(() => {
    textFormatter = new TextFormatter();
  });

  describe('#removePunctuation', () => {
    it('removes punctuation', () => {
      expect(
        textFormatter.removePunctuation('hello! this, is; some punctuation')
      ).toEqual('hello this is some punctuation');
    });
  });

  describe('#splitText', () => {
    it('splits text into array of lowercase words', () => {
      expect(textFormatter.splitText('HelLLooo WorllldD')).toEqual([
        'helllooo',
        'worllldd'
      ]);
    });
  });

  describe('#formatText', () => {
    it('returns lowercase array without punctuation', () => {
      expect(textFormatter.formatText('HelLLooo!! ;;W.orl,lldD')).toEqual([
        'helllooo',
        'worllldd'
      ]);
    });
  });
});
