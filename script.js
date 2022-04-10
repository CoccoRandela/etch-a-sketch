/* grid creator */
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.gridTemplateColumns = `repeat(8, 1fr)`;
for (let i=1; i<=(8*8); i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
}

/*dynamic grid */
const gridResolutions = document.getElementsByClassName('grid-resolution')[0].querySelectorAll('button');
gridResolutions.forEach(gridResolution => {
    gridResolution.addEventListener ('click', () => {
        while(gridContainer.hasChildNodes()){
            gridContainer.removeChild(gridContainer.lastChild); 
        }
        gridContainer.style.gridTemplateColumns = `repeat(${gridResolution.id}, 1fr)`;
        for (let i=1; i<=(gridResolution.id*gridResolution.id); i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            gridContainer.appendChild(square);
        }
        const gridDropdownMenu = document.getElementsByClassName('dropdown-menu grid-resolution')[0];
        gridDropdownMenu.classList.remove('selected');
    })
})

/* grid color */
gridContainer.addEventListener('mousemove', e => {
    if(e.target.classList.contains('square')) {
        e.target.style.backgroundColor = currentColor;
    }
})

/* dynamic colors */
const squareColors = document.getElementsByClassName('square-color')[0].querySelectorAll('button');
let currentColor = 'black';
squareColors.forEach(squareColor => {
    squareColor.addEventListener ('click', () => {
        const colorDropdownMenu = document.getElementsByClassName('dropdown-menu square-color')[0];
        colorDropdownMenu.classList.remove('selected');
        return currentColor = `${squareColor.id}`;
    })
    
})

const eraser = document.querySelector('.eraser')
eraser.addEventListener('click', () => {
    return currentColor = 'white';
})

const clearAll = document.querySelector('.clear-all')
clearAll.addEventListener('click', () => {
    const squares = document.querySelectorAll('.square')
    squares.forEach(square => {
        square.style.backgroundColor = 'white';
    })
})


/* dropdown menu */
const dropdownButtons = document.querySelectorAll('.dropdown-button');
document.addEventListener('click', e => {   
    dropdownButtons.forEach(dropdownButton => {
        if (e.target != dropdownButton && e.target.closest('.dropdown-section')) return;
        let dropdownMenu = dropdownButton.nextElementSibling;
        if (e.target == dropdownButton) {
            dropdownMenu.classList.toggle('selected');
        }
        if (e.target != dropdownButton && dropdownMenu.classList.contains('selected')) {
            dropdownMenu.classList.remove('selected');
        }
    })
})

const toggleButton = document.querySelector('.toggle-button');
toggleButton.addEventListener ('click', () => {
    const navbarProperties = document.querySelector('.navbar-properties');
    navbarProperties.classList.toggle('active');
})