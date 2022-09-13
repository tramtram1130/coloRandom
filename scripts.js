/* ITERATION 2
window event listener with a function  displayPalette()
CREATE global var palette = new Palette
function displayPalette()
call global var
then innerText to display new instance


eventlistener on newPalette button (querySelector)
*/

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

console.log(hexCodeArray)
newPaletteButton.addEventListener('click', displayPalette)

var currentPalette = new Palette()

function displayPalette() {
  // for(var i = 0; i < currentPalette.colors.length; i++) {
  //   currentPalette.colors[i] = new Colors
  //   console.log(currentPalette.colors[i])
  // }
  currentPalette.refreshColors()
  console.log(currentPalette.colors)

  for (var i = 0; i < hexCodeArray.length; i++) {
    hexCodeArray[i].style.backgroundColor = currentPalette.colors[i].hexCode
    hexCodeDisplay[i].innerText = `${currentPalette.colors[i].hexCode}`
  }
}
displayPalette()
