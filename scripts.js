var one = document.getElementById('one')
var two = document.getElementById('two')
var three = document.getElementById('three')
var four = document.getElementById('four')
var five = document.getElementById('five')

var hexOne = document.getElementById('hex-one')
var hexTwo = document.getElementById('hex-two')
var hexThree = document.getElementById('hex-three')
var hexFour = document.getElementById('hex-four')
var hexFive = document.getElementById('hex-five')

var newPaletteButton = document.querySelector('.new-palette')
var saveButton = document.querySelector('.save-palette')
var savedPalettes = document.querySelector('.saved-palettes')
var hexCodeArray = document.querySelectorAll('.color-box')
var hexCodeDisplay = document.querySelectorAll('.hex-code')
var colorContainer = document.querySelector('.colors-container')
var savedSection = document.querySelector('.saved-section-container')

console.log(hexCodeArray)
window.addEventListener('load', displayPalette)
newPaletteButton.addEventListener('click', displayPalette)
saveButton.addEventListener('click', savePalette)

var currentPalette = new Palette();
var savedPalettesList = [];

function displayPalette() {
  currentPalette.refreshColors()
//  console.log(currentPalette.colors)
  for (var i = 0; i < hexCodeArray.length; i++) {
    hexCodeArray[i].style.backgroundColor = currentPalette.colors[i].hexCode
    if (currentPalette.colors[i].locked === true) {
      hexCodeDisplay[i].innerText = currentPalette.colors[i].hexCode + String.fromCodePoint(0x1F512)
    }else{
      hexCodeDisplay[i].innerText = currentPalette.colors[i].hexCode + String.fromCodePoint(0x1F513)
    }
  }
}

function savePalette() {
  var savedColorsContainer = document.createElement('div')
  savedColorsContainer.classList.add('saved-container')
  savedSection.appendChild(savedColorsContainer)
  for (var i = 0; i < currentPalette.colors.length; i++){
    var copyColor = document.createElement('div')
    copyColor.classList.add('saved-box')
    copyColor.style.backgroundColor = currentPalette.colors[i].hexCode
    savedColorsContainer.appendChild(copyColor)
  }
  savedPalettesList.push(currentPalette)
  var p = document.createElement('p');
  p.innerText = String.fromCodePoint(128465); // U+fe0f U+1f5d1
  savedColorsContainer.appendChild(p);

  currentPalette = new Palette;
  displayPalette();
}
