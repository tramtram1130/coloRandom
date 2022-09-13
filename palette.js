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

  lockColor(color) {
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colors[i].hexCode === color.hexCode) {
      this.colors[i].locked = true;
      }
    }
  }

  refreshColors() {
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colors[i].locked === false) {
        this.colors[i] = new Colors;
      }
    }
  }
}


// Palette Tests
// var newPalette = new Palette;

// console.log(newPalette);

// var color = newPalette.colors[1];

// newPalette.lockColor(color);

// console.log(newPalette.colors);

// newPalette.refreshColors();

// console.log(newPalette);

