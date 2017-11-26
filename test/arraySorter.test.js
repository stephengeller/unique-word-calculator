const ArraySorter = require('../src/arraySorter');

describe('arraySorter', () => {
  let arraySorter;
  beforeEach(() => {
    arraySorter = new ArraySorter();
  });

  describe('#sortArray', () => {
    let array;
    beforeEach(() => {
      array = [
        { word: 'hello', count: 2 },
        { word: 'world', count: 1 },
        { word: 'thing', count: 10 }
      ];
    });
    it('sorts an array based on a shared object key', () => {
      expect(arraySorter.sortArray(array, 'count')).toEqual([
        { word: 'world', count: 1 },
        { word: 'hello', count: 2 },
        { word: 'thing', count: 10 }
      ]);
    });
    it('raises error if key does not exist', () => {
      expect(() => {
        arraySorter.sortArray(array, 'thing');
      }).toThrowError('that key does not exist');
    });
    it('can sort with any numerical key', () => {
      let array = [
        { word: 'hello', randomKey: 211 },
        { word: 'world', randomKey: 1314314 },
        { word: 'thing', randomKey: 101355 }
      ];
      expect(arraySorter.sortArray(array, 'randomKey')).toEqual([
        { word: 'hello', randomKey: 211 },
        { word: 'thing', randomKey: 101355 },
        { word: 'world', randomKey: 1314314 }
      ]);
    });
  });
});
