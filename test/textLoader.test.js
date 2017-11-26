const TextLoader = require('../src/textLoader');

describe('TextLoader', () => {
  const fs = {
    readFileSync: jest.fn(() => {
      return 'This is a sample text file';
    })
  };
  const path = {
    join: jest.fn(() => {
      return './path/to/file';
    })
  };
  const util = {
    format: jest.fn(() => {
      return 'This is the formatted content of a text file';
    })
  };
  const consoleMock = {
    log: jest.fn(message => {
      `${message} sent to std out`;
    })
  };
  let textLoader;
  beforeEach(() => {
    textLoader = new TextLoader(fs, path, util, consoleMock);
  });

  it('exists', () => {
    expect(TextLoader).toBeDefined();
  });

  describe('#getText', () => {
    beforeEach(() => {
      textLoader.getText('../src/file');
    });
    it('calls the fs module to read a file', () => {
      expect(fs.readFileSync).toHaveBeenCalled();
    });
    it('calls the path module to locate the file a file', () => {
      const srcFolderStringIndex = __dirname.indexOf('/test');
      const sourceDirectory = __dirname.slice(0, srcFolderStringIndex) + '/src';
      expect(path.join).toHaveBeenCalledWith(sourceDirectory, '../src/file');
    });
  });
});
