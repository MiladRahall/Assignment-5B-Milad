let area = 0
let circumference = 0
let diameter = 0
let radius = 0
let radius2 = 0
// The above code allows several parts of my calculation to work
document.getElementById('button').addEventListener('click', calculate)
// This is to add an event listener to my button
function calculate () {
  diameter = document.getElementById('di').value
  diameter = parseInt(diameter)
  // This allows the input in the text box to work with the rest of the calculation
  circumference = diameter * 3.14
  // This code is for my circumference//
  document.getElementById('tc').innerHTML = circumference
  // This lets the cirfumference results appear where they should be on the page
  radius = diameter / 2
  radius2 = radius * radius
  // This sets up my radius to be used in the calculation
  area = 3.14 * radius2
  document.getElementById('ta').innerHTML = area
  // This code calculates the area and replaces the area paragraph on the page with the result
}
