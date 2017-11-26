class TextFormatter {
  splitText(text) {
    return text.toLowerCase().split(' ');
  }

  removePunctuation(text) {
    return text.replace(/[^\w\s]|_/g, '').replace(/\s+/g, ' ');
  }

  formatText(text) {
    return this.splitText(this.removePunctuation(text));
  }
}

module.exports = TextFormatter;
