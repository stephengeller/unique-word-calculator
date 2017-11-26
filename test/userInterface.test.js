const UserInterface = require('../src/userInterface');

describe('userInterface', () => {
  let userInterface;
  const lineFormatter = {
    formatLine: jest.fn()
  };
  const wordFrequencyProcessor = {
    processText: jest.fn(text => text.split(' '))
  };
  const arraySorter = {
    sortArray: jest.fn(element => element)
  };
  beforeEach(() => {
    userInterface = new UserInterface(
      lineFormatter,
      wordFrequencyProcessor,
      arraySorter
    );
  });

  describe('#processText', () => {
    beforeEach(() => {
      userInterface.processText(
        'Hello world! What a beautiful thing it is to say, hello word. What a thing indeed...'
      );
    });
    it('calls the wordFrequencyProcessor to process the text into an array', () => {
      expect(wordFrequencyProcessor.processText).toHaveBeenCalled();
    });
  });
  describe('#sortWordsByCount', () => {
    it('calls the arraySorter to sort the words', () => {
      userInterface.sortWordsByCount([1, 2, 3]);
      expect(arraySorter.sortArray).toHaveBeenCalled();
    });
  });
  describe('#renderTable', () => {
    it('calls the lineFormatter to render strings for the table', () => {
      userInterface.renderTable([1, 2, 3]);
      expect(lineFormatter.formatLine).toHaveBeenCalled();
    });
  });
});