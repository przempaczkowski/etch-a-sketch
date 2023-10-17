const main = document.querySelector('#main');
const toolBox = document.querySelector('#tool-box');
const grid = document.querySelector('#grid');
const btnLow = document.querySelector('#low');
const btnFullHd = document.querySelector('#fullHd');
const btnFourK = document.querySelector('#fourk');
const btnTop = document.querySelector('#top');
const btnOff = document.querySelector('#off')
const btnReset = document.querySelector('#reset')


let gridSize = 0;
function createGrid() {
    grid.innerHTML = ''; // clear the existing grid
    const boxSize = `${24 / gridSize}rem`; // box size based on grid size

    for (let i = 0; i < gridSize * gridSize; i++) {
        const box = document.createElement('div');
        box.classList.add('box');
        box.style.width = boxSize;
        box.style.height = boxSize;
        box.style.border = '1px solid pink';
        grid.appendChild(box);
    }

    const boxes = document.querySelectorAll('.box'); //  select all elements with the class 'box'
    boxes.forEach((box) => {
        box.addEventListener('mouseover', function () {
            box.classList.add('change');
        });
    });

    boxes.forEach((box) => {
        box.addEventListener('touchstart', function () {
            box.classList.add('change');
        });
    });
}

createGrid();

btnLow.addEventListener('click', () => {
    gridSize = 8;
    createGrid(); 
});

btnFullHd.addEventListener('click', () => {
    gridSize = 16;
    createGrid(); 
});

btnFourK.addEventListener('click', () => {
    gridSize = 32;
    createGrid(); 
});

btnTop.addEventListener('click', () => {
    gridSize = 64;
    createGrid(); 
});

btnOff.addEventListener('click', () => {
    gridSize = 0;
    createGrid(); 
});


