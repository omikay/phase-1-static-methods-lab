class Formatter { 
  static capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  static sanitize(string) {
    return string.replace(/[^A-Za-z0-9 '-]/g, '');
  }

  static titleize(sentence) {
    let exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from'];
    let result = [];
    let wordsArray = sentence.split(" ");
    for (let n = 0; n < wordsArray.length; n++) {
      if (n === 0) {
        result.push(this.capitalize(wordsArray[n]))
      } else {
        if (exceptions.includes(wordsArray[n])) {
          result.push(wordsArray[n])
        } else {
          result.push(this.capitalize(wordsArray[n]))
        }
      }
    }
    return result.join(" ");
  }
}