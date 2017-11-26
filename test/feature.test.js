const UserInterface = require('../src/userInterface');

describe('feature', () => {
  it('for a block of text, it returns a table of words with their frequency', () => {
    const finalTable =
      'IS | 1\n' +
      'SO | 1\n' +
      'WORLD | 2 | Prime!\n' +
      'HELLO | 3 | Prime!\n' +
      'COOL | 4';
    const sampleText =
      'Hello world; hello! H-ello world is so cool, cool cool cool.';
    const userInterface = new UserInterface();
    expect(userInterface.processText(sampleText)).toEqual(finalTable);
  });
});
