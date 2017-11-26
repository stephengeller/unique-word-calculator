const UserInterface = require('../src/userInterface');

describe('feature', () => {
  it('for a block of text, it returns a table of words with their frequency', () => {
    const finalTable =
      'is | 1 | false\n' +
      'so | 1 | false\n' +
      'world | 2 | true\n' +
      'hello | 3 | true\n' +
      'cool | 4 | false';
    const sampleText =
      'Hello world; hello! Hello world is so cool, cool cool cool.';
    const userInterface = new UserInterface();
    expect(userInterface.processText(sampleText)).toEqual(finalTable);
  });
});
