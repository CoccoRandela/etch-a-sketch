/* grid creator */
const gridContainer = document.querySelector('.grid-container');
gridContainer.style.gridTemplateColumns = `repeat(16, 1fr)`;
for (let i=1; i<=(16*16); i++) {
    let square = document.createElement('div');
    square.classList.add('square');
    gridContainer.appendChild(square);
}

/* squares color */
const squares = document.querySelectorAll('.square');
squares.forEach(square => {
    square.addEventListener('mouseover', () => {
        square.style.backgroundColor = 'transparent';
        square.style.border = '.1rem solid red'; 
    })
})

/* dropdown menu */
document.addEventListener('click', e => {
    const dropdownButtons = document.querySelectorAll('.dropdown-button');
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
toggleButton.addEventListener ('click', () =>{
    const navbarProperties = document.querySelector('.navbar-properties');
    navbarProperties.classList.toggle('active');
})