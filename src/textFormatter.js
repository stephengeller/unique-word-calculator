class TextFormatter {
  splitText(text) {
    const array = text.toLowerCase().split(' ');
    if (array[0] === '') {
      array.splice(0, 1);
    }
    return array;
  }

  removePunctuation(text) {
    return text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
  }

  formatTextToArray(text) {
    return this.splitText(this.removePunctuation(text));
  }
}

module.exports = TextFormatter;
