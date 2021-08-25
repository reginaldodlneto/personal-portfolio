let hamburguer = document.querySelector('.hamburguer')
let sidebar = document.querySelector('.sidebar')

hamburguer.addEventListener('click', () => {
  sidebar.classList.toggle('show-menu')
})

hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('show-menu')
})
