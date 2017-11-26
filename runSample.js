const userInterface = new (require('./src/userInterface'))();
const textLoader = new (require('./src/textLoader'))();

const text = textLoader.getText(__dirname, 'book-sample.txt');
userInterface.processText(text);
