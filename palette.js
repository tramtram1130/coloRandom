class Palette {
  constructor() {
    this.colors = [new Colors, new Colors, new Colors, new Colors, new Colors];
    this.id = Date.now()
  }
  refreshColors() {
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colors[i].locked === false) {
        this.colors[i] = new Colors;
      }
    }
  }
}
