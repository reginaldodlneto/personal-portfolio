let hamburguer = document.querySelector('.hamburguer')
let sidebar = document.querySelector('.sidebar')
let arrowUp = document.querySelector('#link-up')

hamburguer.addEventListener('click', () => {
  sidebar.classList.toggle('show-menu')
})

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('show-menu')
})

hamburguer.addEventListener('click', () => {
  arrowUp.classList.toggle('show-menu')
})
