//variables

let colorTable = [
  '#000000',
  '#fcfcfc',
  '#f8f8f8',
  '#bcbcbc',
  '#7c7c7c',
  '#a4e4fc',
  '#3cbcfc',
  '#0078f8',
  '#0000fc',
  '#b8b8f8',
  '#6888fc',
  '#0058f8',
  '#0000bc',
  '#d8b8f8',
  '#9878f8',
  '#6844fc',
  '#4428bc',
  '#f8b8f8',
  '#f878f8',
  '#d800cc',
  '#940084',
  '#f8a4c0',
  '#f85898',
  '#e40058',
  '#a80020',
  '#f0d0b0',
  '#f87858',
  '#f83800',
  '#a81000',
  '#fce0a8',
  '#fca044',
  '#e45c10',
  '#881400',
  '#f8d878',
  '#f8b800',
  '#ac7c00',
  '#503000',
  '#d8f878',
  '#b8f818',
  '#00b800',
  '#007800',
  '#b8f8b8',
  '#58d854',
  '#00a800',
  '#006800',
  '#b8f8d8',
  '#58f898',
  '#00a844',
  '#005800',
  '#00fcfc',
  '#00e8d8',
  '#008888',
  '#004058',
  '#f8d8f8',
  '#787878'
]
let colors1 = document.querySelector('#colors1')
let colors2 = document.querySelector('#colors2')
const pickedColor = document.querySelector('#pickedColor')
const colorSpans = document.querySelectorAll('.colorSpan')
const menu1 = document.querySelector('.menu1')
const menu2 = document.querySelector('.menu2')
const colorPicks = document.querySelectorAll('.colorPick')
const dl = document.querySelector('#dl')
let tableauCouleurTemp = 0
let tempColor
let tempToColor = 0
let isClicked = false
document.onmousedown = function () {
  isClicked = true
}
document.onmouseup = function () {
  isClicked = false
}

// function blackBorder(){

//     colorSpans.forEach(span =>{
//         span.classList.remove('whiteBorder');
//     })
// }


//menu déroulant pour choisir les couleurs

menu1.addEventListener('click', function(e){
  if(colors1.classList.contains('hidden')){
    colors1.classList.remove('hidden')
    colors1.classList.remove('disparition')
    colors1.classList.add('apparition')
  }else{
    colors1.classList.remove('apparition');
    colors1.classList.add('disparition')
    setTimeout(() => {
      
      colors1.classList.add('hidden')
    }, 800)
  }
})
menu2.addEventListener('click', function(e){
  if(colors2.classList.contains('hidden')){
    colors2.classList.remove('hidden')
    colors2.classList.remove('disparition')
    colors2.classList.add('apparition')
  }else{
    colors2.classList.remove('apparition');
    colors2.classList.add('disparition')
    setTimeout(() => {
      
      colors2.classList.add('hidden')
    }, 800)
  }
})




//creation fonction pour créer des tableaux de couleurs à choisir

function createSpans (zone) {
  for (i = 0; i < 7; i++) {
    let newDiv = document.createElement('div')
    newDiv.id = 'color1Div' + i
    newDiv.classList.add('colorDiv')
    zone.appendChild(newDiv)
    for (j = 0; j < 4; j++) {
      let colorSpan = document.createElement('span')
      colorSpan.classList.add('colorSpan')
      colorSpan.id = 'colorSpan' + tableauCouleurTemp
      colorSpan.style.backgroundColor = colorTable[tableauCouleurTemp]
      newDiv.appendChild(colorSpan)
      tableauCouleurTemp++
      colorSpan.addEventListener('click', function (e) {
        e.preventDefault()
        pickedColor.style.backgroundColor = colorSpan.style.backgroundColor
        tempColor = pickedColor.style.backgroundColor

        // blackBorder();
        // colorSpan.classList.add('whiteBorder');
      })
    }
  }
}

createSpans(colors1)
createSpans(colors2)

//création de la zone de travail et des fonctions inhérentes à chaque span

for (i = 0; i < 30; i++) {
  let newDiv = document.createElement('div')
  newDiv.id = 'color1Div' + i
  newDiv.classList.add('colorDiv')
  mainDraw.appendChild(newDiv)
  for (j = 0; j < 30; j++) {
    let colorSpan = document.createElement('span')
    colorSpan.classList.add('toColor')
    colorSpan.id = 'toColor' + tableauCouleurTemp
    colorSpan.style.backgroundColor =
      colorTable[Math.floor(Math.random() * colorTable.length)]
    newDiv.appendChild(colorSpan)
    tempToColor++
    colorSpan.addEventListener('mousedown', function (e) {
      e.preventDefault()
      colorSpan.style.backgroundColor = tempColor
    })
    colorSpan.addEventListener('touchstart', function (e) {
      e.preventDefault()
      colorSpan.style.backgroundColor = tempColor
    })
    colorSpan.addEventListener('mouseover', function (e) {
      if (isClicked === true) {
        colorSpan.style.backgroundColor = tempColor
      }
    })
    colorSpan.addEventListener('touchmove', function (e) {
      
        colorSpan.style.backgroundColor = tempColor
      
    })
  }
}

// tentatives de créer un bouton permettant le telechargement de sa création

dl.addEventListener('click', function (e) {
  e.preventDefault()

  //   dl.download = html2canvas(document.querySelector('#mainDraw'))
  //     .then(canvas => {
  //       canvas.id = 'toDl'
  //       document.body.appendChild(canvas)
  //     })

  function saveScreenshot (canvas) {
    const fileName = 'image'
    const link = document.createElement('a')
    link.download = fileName + '.png'
    console.log(canvas)
    canvas.toBlob(function (blob) {
      console.log(blob)
      link.href = URL.createObjectURL(blob)
      link.click()
    })
  }

  html2canvas(document.querySelector('#mainDraw'), {
    allowTaint: true,
    useCORS: true
  }).then(saveScreenshot)
})
