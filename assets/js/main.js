// nav section
let nav = document.getElementById('nav').classList

window.onscroll = () => {
  // console.log(scrollY)
  if(scrollY > 30){
    nav.add('active')
  } else {
    nav.remove('active')
  }
}

let searchBox = document.getElementById('search-box')
let icons = document.getElementById('icons')

searchBox.onfocus = () => {
  icons.classList.add('deactivate')
  searchBox.classList.add('active')
}
searchBox.onblur = () => {
  icons.classList.remove('deactivate')
  searchBox.classList.remove('active')
}

// let toggler = document.getElementById('toggler')
// let ul = document.getElementById('list')

// toggler.onclick = () => {
//   // console.log('first')
//   ul.classList.toggle('active')
//   // console.log(ul.classList)

//   toggler.innerHTML == '<i class="fa-solid fa-bars"></i>'
//     ? (toggler.innerHTML = '<i class="fa-solid fa-xmark"></i>')
//     : (toggler.innerHTML = '<i class="fa-solid fa-bars"></i>')
// }
