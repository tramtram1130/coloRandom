class Color {
  constructor() {
    this.hexCode = this.randomHexCode();
    this.locked = false
  }

  randomHexCode() {
    var characters = ['A', 'B', 'C', 'D', 'E', 'F', 0 , 1, 2, 3, 4, 5, 6, 7, 8, 9];
    var hexCode = '#';
    for (var i = 0; i < 6; i++) {
      var randomNum = Math.floor(Math.random() * 16);
      hexCode += characters[randomNum];
    }
    return hexCode;
  }

  lockColor() {
    if(!this.locked) {
      this.locked = true
    } else {
      this.locked = false
    }
  }
}
