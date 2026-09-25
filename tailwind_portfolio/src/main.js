import './style.css'

// Get the current year
document.getElementById('year').textContent = new Date().getFullYear()

// Get the burger button and menu
const menuButton = document.getElementById('menu-button')
const menu = document.getElementById('menu')

// Open and close the menu 
menuButton.addEventListener('click', () => {
  menu.classList.toggle('hidden')
})