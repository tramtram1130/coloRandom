class Palette {
  constructor() {
    this.colors = [new Color, new Color, new Color, new Color, new Color];
    this.id = Date.now()
  }

  refreshColors() {
    for (var i = 0; i < this.colors.length; i++) {
      if (this.colors[i].locked === false) {
        this.colors[i] = new Color;
      }
    }
  }
}
