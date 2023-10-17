const main = document.querySelector('#main');
const toolBox = document.querySelector('#tool-box');
const grid = document.querySelector('#grid');

let gridSize = prompt("Set grid size. Be nice to your browser, pick something between 2 and 96", " ");

        
function createGrid() {
    grid.innerHTML = ''; // Clear the existing grid
    const boxSize = `${24 / gridSize}rem`; // Calculate box size based on grid size

    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = boxSize;
        box.style.height = boxSize;
        box.style.border = '1px solid pink';
        grid.appendChild(box);
    }
}

createGrid();


const boxes = document.querySelectorAll('.box'); //  select all elements with the class 'box'

boxes.forEach((box) => {
    box.addEventListener('mouseover', function () {
        box.classList.add('change');
    });
});