// ? nav section
let nav = document.getElementById('nav')

window.onscroll = () => {
  // console.log(scrollY)
  if(scrollY > 30){
    nav.classList.add('active')
  } else {
    nav.classList.remove('active')
  }
}

let searchBox = document.getElementById('search-box')
let lgIcons = document.getElementById('lgIcons')

searchBox.onfocus = () => {

  // eg[0].classList.add('hide');  
  searchBox.classList.add('active')
  lgIcons.classList.add('hide')
}
searchBox.onblur = () => {
  searchBox.classList.remove('active')
  lgIcons.classList.remove('hide')
}


// ? toggler
let toggler = document.getElementById('toggler')
// console.log(toggler)
let items = document.getElementById('items')
// console.log(items.classList)


toggler.onclick = () => {
  // console.log('clicked **')
  items.classList.toggle('toggle')
  nav.classList.add('showNav')
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

// ? slider
let prevBtn = document.getElementById('prevBtn')
let nextBtn = document.getElementById('nextBtn')
let slider = document.getElementsByClassName('coverPicture')
let num = 1

nextBtn.onclick = function () {
  document.getElementById(`sliderPic${num}`).classList.remove('active')
  num++
  if(num >slider.length){
    num = 1
  }
  document.getElementById(`sliderPic${num}`).classList.add('active')
}

prevBtn.onclick = function prevClicked() {
  document.getElementById(`sliderPic${num}`).classList.remove('active')
  num--
  console.log(num)
  if(num==0){
    num=slider.length
  }
  document.getElementById('sliderPic'+num).classList.add('active')
  
}