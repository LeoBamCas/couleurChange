
let colorTable = ['#000000',"#fcfcfc","#f8f8f8","#bcbcbc","#7c7c7c","#a4e4fc","#3cbcfc","#0078f8","#0000fc","#b8b8f8","#6888fc","#0058f8","#0000bc","#d8b8f8","#9878f8","#6844fc","#4428bc","#f8b8f8","#f878f8","#d800cc","#940084","#f8a4c0","#f85898","#e40058","#a80020","#f0d0b0","#f87858","#f83800","#a81000","#fce0a8","#fca044","#e45c10","#881400","#f8d878","#f8b800","#ac7c00","#503000","#d8f878","#b8f818","#00b800","#007800","#b8f8b8","#58d854","#00a800",'#006800',"#b8f8d8","#58f898","#00a844","#005800","#00fcfc","#00e8d8","#008888","#004058","#f8d8f8","#787878"];
let colors1 = document.querySelector("#colors1");
let colors2 = document.querySelector("#colors2");
const pickedColor = document.querySelector('#pickedColor');
const colorSpans = document.querySelectorAll('.colorSpan');
let tableauCouleurTemp = 0;
let tempColor;
let tempToColor =0;
let isClicked = false;
document.onmousedown = function(){ isClicked = true; console.log(isClicked)};
document.onmouseup = function(){ isClicked = false; console.log(isClicked) };


function blackBorder(){

    colorSpans.forEach(span =>{
        span.classList.remove('whiteBorder');
    })
}

//creation fonction pour créer des tableaux

function createSpans(zone){
    for(i=0;i<7;i++){
    
        let newDiv = document.createElement('div');
        newDiv.id = 'color1Div' + i;
        newDiv.classList.add('colorDiv');
        zone.appendChild(newDiv);
        for (j =0; j<4;j++){
            let colorSpan = document.createElement('span');
            colorSpan.classList.add('colorSpan');
            colorSpan.id = 'colorSpan' + tableauCouleurTemp;
            colorSpan.style.backgroundColor = colorTable[tableauCouleurTemp];
            newDiv.appendChild(colorSpan);            
            tableauCouleurTemp++;
            colorSpan.addEventListener('click', function(e){
                e.preventDefault();
                pickedColor.style.backgroundColor = colorSpan.style.backgroundColor;
                tempColor = pickedColor.style.backgroundColor;

                blackBorder();
                colorSpan.classList.add('whiteBorder');
            })
        }
    }

}

createSpans(colors1);
createSpans(colors2);



for(i=0;i<30;i++){
    
    let newDiv = document.createElement('div');
    newDiv.id = 'color1Div' + i;
    newDiv.classList.add('colorDiv');
    mainDraw.appendChild(newDiv);
    for (j =0; j<30;j++){
        let colorSpan = document.createElement('span');
        colorSpan.classList.add('toColor');
        colorSpan.id = 'toColor' + tableauCouleurTemp;
        colorSpan.style.backgroundColor = colorTable[Math.floor(Math.random()*colorTable.length)];
        newDiv.appendChild(colorSpan);            
        tempToColor++;
        colorSpan.addEventListener('click', function(e){
            e.preventDefault();
            colorSpan.style.backgroundColor = tempColor;
        })
        colorSpan.addEventListener('mouseover', function(e){
            if(isClicked === true){
                colorSpan.style.backgroundColor = tempColor;
                console.log('enter')
            }
        })
    }
}
