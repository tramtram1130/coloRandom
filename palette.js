const Colors = require('./colors.js');

class Palette {
  constructor() {
    this.colors = this.newPalette();
    this.id = Date.now()
  }

  newPalette() {
    var palette = [];
    for (var i = 0; i < 5; i++) {
      palette.push(new Colors);
    }
    return palette;
  }
}

var newPalette = new Palette;

console.log(newPalette);

