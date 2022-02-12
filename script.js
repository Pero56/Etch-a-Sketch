const container = document.querySelector('.container');


for(let i = 0;i<16;i++){
    newDiv = document.createElement('div');
    container.appendChild(newDiv);
    for(let j = 0;j<16;j++){
        px = document.createElement('div');
        px.classList.add('px');
        px.addEventListener('mouseover', changeColor)
        newDiv.appendChild(px);
    
    }
}

function changeColor(e){ 
    e.target.style.backgroundColor = '#333333';
}