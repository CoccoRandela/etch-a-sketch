const columnNumber = prompt('how many squares x row', '');
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.gridTemplateColumns = `repeat(${columnNumber}, 1fr)`;
for (let i=1; i<=(columnNumber*columnNumber); i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
}

const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'black';
        
    })
})