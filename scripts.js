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

var newPaletteButton = document.querySelector('new-palette')
var saveButton = document.querySelector('save-palette')
var savedPalettes = document.querySelector('saved-palettes')