const container = document.querySelector('#container');
const newGridBtn = document.querySelector('#newGridBtn');
const defaultGridSize = 16;
let currentGridSize = defaultGridSize;

function clearGrid() {
    container.innerHTML = '';
}

function createGrid(size) {
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    const totalSquares = size * size;
    for (let i = 0; i < totalSquares; i++) {
        const gridSquare = document.createElement('div');
        gridSquare.classList.add('grid-square');
        gridSquare.addEventListener('mouseenter', () => {
            gridSquare.style.backgroundColor = 'black';
        });
        container.appendChild(gridSquare);
    }
}

function handleNewGrid() {
    let newSize = prompt("Enter the number of squares per side (max 100):");

    if (newSize === null) {
        return; // User cancelled the prompt
    }

    newSize = parseInt(newSize);

    if (isNaN(newSize) || newSize < 1 || newSize > 100) {
        alert("Please enter a valid number between 1 and 100.");
        return;
    }

    currentGridSize = newSize;
    clearGrid();
    createGrid(currentGridSize);
}

// Initial grid creation
createGrid(currentGridSize);

// Event listener for the New Grid button
newGridBtn.addEventListener('click', handleNewGrid);