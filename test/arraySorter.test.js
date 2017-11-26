const ArraySorter = require('../src/arraySorter');

describe('arraySorter', () => {
  let arraySorter;
  beforeEach(() => {
    arraySorter = new ArraySorter();
  });

  describe('#sortArray', () => {
    it('sorts an array based on a shared object key', () => {
      const array = [
        { word: 'hello', count: 2 },
        { word: 'world', count: 1 },
        { word: 'thing', count: 10 }
      ];
      expect(arraySorter.sortArray(array, 'count')).toEqual([
        { word: 'world', count: 1 },
        { word: 'hello', count: 2 },
        { word: 'thing', count: 10 }
      ]);
    });
  });
});
