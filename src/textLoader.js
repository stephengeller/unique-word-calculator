const fs = require('fs');
const path = require('path');
const util = require('util');

class TextLoader {
  constructor(
    fsModule = fs,
    pathModule = path,
    utilModule = util,
    console = console
  ) {
    this.fsModule = fsModule;
    this.pathModule = pathModule;
    this.utilModule = utilModule;
    this.console = console;
  }

  getText(filePath) {
    this.fsModule.readFile(
      this.pathModule.join(__dirname, filePath),
      'utf8',
      (err, data) => {
        if (err) {
          console.log(err);
          process.exit(1);
        }
        const content = this.utilModule.format(data);
        console.log(content);
        return content;
      }
    );
  }
}

module.exports = TextLoader;
