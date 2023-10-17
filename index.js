const main = document.querySelector('#main');
const toolBox = document.querySelector('#tool-box');
const grid = document.querySelector('#grid');

let gridSize = 16;

        
function createGrid() {
    for (let i = 0; i < 256; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = '1rem';  // You can change this value for different box sizes
        box.style.height = '1rem'; // You can change this value for different box sizes
        box.style.border = 'solid black 1px';
        grid.appendChild(box);
    }
}
createGrid();


const boxes = document.querySelectorAll('.box'); // Use querySelectorAll to select all elements with the class 'box'

boxes.forEach((box) => {
    box.addEventListener('mouseover', function () {
        box.classList.add('change');
    });
});