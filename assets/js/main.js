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


// ? toggler
let toggler = document.getElementById('toggler')
// console.log(toggler)
let items = document.getElementById('items')
// console.log(items.classList)


toggler.onclick = () => {
  // console.log('clicked **')
  items.classList.toggle('toggle')
  // console.log(toggler.innerHTML)

  
  if( toggler.innerHTML == '<i id="icon" class="fa-solid fa-bars"></i>'){
    console.log('if loop')
   
    toggler.innerHTML = '<i class="fa-solid fa-xmark"></i>'
    
  }else {
    console.log('else loop')
    toggler.innerHTML = '<i id="icon" class="fa-solid fa-bars"></i>'
  }

}
// ? toggler end

