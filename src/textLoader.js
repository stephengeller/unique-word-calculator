const fs = require('fs');
const path = require('path');
const util = require('util');

class TextLoader {
  constructor(
    fsModule = fs,
    pathModule = path,
    utilModule = util,
    consoleLogger = console.log
  ) {
    this.fsModule = fsModule;
    this.pathModule = pathModule;
    this.utilModule = utilModule;
    this.consoleLogger = consoleLogger;
  }

  getText(filePath) {
    let text = '';
    return this.fsModule.readFileSync(
      this.pathModule.join(__dirname, filePath),
      'utf8',
      (err, data) => {
        if (err) {
          this.consoleLogger(err);
          process.exit(1);
        }
        return this.utilModule.format(data);
      }
    );
  }
}

module.exports = TextLoader;
