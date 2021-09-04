const hamburguer = document.querySelector('.hamburguer')
const sidebar = document.querySelector('.sidebar')
const arrowUp = document.querySelector('#link-up')
const links = document.querySelectorAll('.menu-link')

hamburguer.addEventListener('click', () => {
  sidebar.classList.toggle('show-menu')
  hamburguer.classList.toggle('show-menu')
  arrowUp.classList.toggle('show-menu')
})

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', () => {
    sidebar.classList.toggle('show-menu')
    hamburguer.classList.toggle('show-menu')
  })
}
