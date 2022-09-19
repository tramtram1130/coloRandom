var newPaletteButton = document.querySelector('.new-palette')
var saveButton = document.querySelector('.save-palette')
var hexCodeArray = document.querySelectorAll('.color-box')
var hexCodeDisplay = document.querySelectorAll('.hex-code')
var colorContainer = document.querySelector('.colors-container')
var savedSection = document.querySelector('.saved-section-container')

window.addEventListener('load', displayPalette)
newPaletteButton.addEventListener('click', displayPalette)
saveButton.addEventListener('click', savePalette)
colorContainer.addEventListener('click', lockColor)
savedSection.addEventListener('click', deletePalette)


var currentPalette = new Palette()
var savedPalettesList = []

function displayPalette() {
  currentPalette.refreshColors()
  for (var i = 0; i < hexCodeArray.length; i++) {
    hexCodeArray[i].style.backgroundColor = currentPalette.colors[i].hexCode
    if (currentPalette.colors[i].locked === true) {
      hexCodeDisplay[i].innerText = currentPalette.colors[i].hexCode + String.fromCodePoint(0x1F512)
    } else {
      hexCodeDisplay[i].innerText = currentPalette.colors[i].hexCode + String.fromCodePoint(0x1F513)
    }
  }
}

function savePalette() {
  displaySavedPalette()
  savedPalettesList.push(currentPalette)
  currentPalette = new Palette
  displayPalette()
}

function displaySavedPalette() {
  var savedColorsContainer = document.createElement('div')
  savedColorsContainer.classList.add('saved-container')
  savedSection.appendChild(savedColorsContainer)

  for (var i = 0; i < currentPalette.colors.length; i++){
    var copyColor = document.createElement('div')
    copyColor.classList.add('saved-box')
    copyColor.style.backgroundColor = currentPalette.colors[i].hexCode
    savedColorsContainer.appendChild(copyColor)
  }

  var button = document.createElement('button')
  button.id = currentPalette.id
  button.innerText = String.fromCodePoint(128465)
  savedColorsContainer.appendChild(button)
}

function lockColor(event) {
  var targetId = event.target.id
  var index

  switch (targetId) {
    case "one":
      index = 0
      break
    case "two":
      index = 1
      break
    case "three":
      index = 2
      break
    case "four":
      index = 3
      break
    case "five":
      index = 4
      break
    default: return
  }

  var colorToLock = currentPalette.colors[index]
  if(currentPalette.colors[index].locked === false) {
    hexCodeDisplay[index].innerText = colorToLock.hexCode + String.fromCodePoint(0x1F512)
    currentPalette.colors[index].lockColor()
  }
  else {
    hexCodeDisplay[index].innerText = colorToLock.hexCode + String.fromCodePoint(0x1F513)
    currentPalette.colors[index].lockColor()
  }
}

function deletePalette(event) {
  for (var i = 0; i < savedPalettesList.length; i++) {
    if (savedPalettesList[i].id === Number(event.target.id)) {
      savedPalettesList.splice(i, 1)
      event.target.parentNode.remove()
    }
  }
}
