// Your code goes here
// TO VEIW ANYTHING COMMENT THESE 2 TRAPS OUT
// let mouseTrap = document.querySelector('header')
// mouseTrap.addEventListener('mouseout', event => {
//     mouseTrap.style.display = 'none' 

// })
// let meanTrap = document.querySelector('body')
//    meanTrap.addEventListener('mouseout', event => {
//         meanTrap.style.display = 'none'
//    })
// end of the traps

let homeText = document.querySelector('.intro p')
console.log('homeText', homeText)
homeText.addEventListener('click', event => {
    console.log('Clicked!')

})

let textHide = document.querySelector('.intro img')
textHide.addEventListener('dblclick', event2 => {
    textHide.style.display = 'none'
})
let containerSelect = document.querySelector('.container')
let backgroundChange = document.querySelector('img')

backgroundChange.addEventListener('mouseover', event => {
    containerSelect.style.color = 'red'
})
let p = document.querySelector('p')
containerSelect.addEventListener('resize', event => {
    p.textContent ='Ooops its broken'
})

let buttonSelect = document.querySelector('.btn')
buttonSelect.addEventListener('mousedown', event => {
    buttonSelect.textContent = 'error: 404'
})

let footerSelect = document.querySelector('.footer p')
    console.log(footerSelect)
    footerSelect.addEventListener('load', event => {
       footerSelect.textContent = 'Page is fully loaded'
    })

let navSelect = document.querySelector('nav')
let navSelect2 = document.querySelector('content-pick')
   navSelect.addEventListener('keydown', event => {
       navSelect.style.border = '2px solid red'
   })

//tests:   

let noDrag = document.querySelector('img-content')
   noDrag.addEventListener('dragstart', event => {
       return false
   })
let noDragOver = document.querySelector('img-content')
noDragOver.addEventListener('dragover', event => {
    event.preventDefault()
})
let noDrop = document.querySelector('img-content')
noDrop.addEventListener('drop', event => {
    event.preventDefault()
})


let contentSection  = document.querySelector('content-section')
   contentSection.addEventListener('wheel', event => {
    img.style.display = 'none'
   })








