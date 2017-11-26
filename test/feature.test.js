const UserInterface = require('../src/userInterface');

describe('feature', () => {
  it('for a block of text, it returns a table of words with their frequency', () => {
    const finalTable =
      'is|1\n' + 'so|1\n' + 'world|2\n' + 'hello|3\n' + 'cool|4';
    const sampleText =
      'Hello world; hello! Hello world is so cool, cool cool cool.';
    const userInterface = new UserInterface();
    expect(userInterface.processText(sampleText)).toEqual(finalTable);
  });
});
