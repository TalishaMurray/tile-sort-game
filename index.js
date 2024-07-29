//colors for player1  tiles
const colors = ['Red', 'Green', 'blue', 'yellow', 'orange', 'purple', 'cyan', 'pink'];
//symbols for player2 tiles
const simpleShapes = ['⚫', '■', '▲', '♦', '★', '❤', '♠', '♣'];

function gameSetup(){
    let button = document.getElementById('start');
    let header = document.getElementById('header');
    let player1 = document.createElement('div');
    let player2 = document.createElement('div');
    let stats = document.createElement('div');

    document.body.appendChild(stats);
    //player 1 is the user and player 2 is the computer, the user's set of tiles are at the bottom of the screen to create the illusion of a table.
    document.body.appendChild(player2);
    document.body.appendChild(player1);

    player1.id ='player-1';
    player2.id ='player-2';
    stats.id ='stats';

    button.classList.add('hidden');
    header.classList.add('hidden');

    createTiles(player1, player2);
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

//create the game tiles flipped on their back so the colors and shapes are not vissible and assign them random colors and shapes
function createTiles(player1, player2){
//todo create tiles in an array of 8 cols and 6 rows, assign the random colors and shapes to them there must be 6 of each type and they should be mixed between players as well
let player1Tiles = [];
let player2Tiles = [];

// Generate 48 tiles for each player
for (let i = 0; i < 48; i++) {
    player1Tiles.push({
        type: 'color',
        value: colors[i % colors.length] // Repeat colors
    });
    player2Tiles.push({
        type: 'shape',
        value: simpleShapes[i % simpleShapes.length] // Repeat shapes
    });
}

// Create an array of all tiles
let allTiles = [...player1Tiles, ...player2Tiles];
shuffleArray(allTiles);

// Distribute tiles to player 1 and player 2
allTiles.forEach((tile, index) => {
    let tileDiv = document.createElement('div');
    tileDiv.className = 'tile';
    tileDiv.dataset.type = tile.type;
    tileDiv.dataset.value = tile.value;

    // Add click event for flipping the tile
    tileDiv.onclick = flipTile;

    // Append tile to the correct player container
    if (index < 48) {
        player1.appendChild(tileDiv);
    } else {
        player2.appendChild(tileDiv);
    }
});
}
//push a flipped tile down the correct col and flip the tile that got pushed out the bottom.
function sortTile(){
//todo
}

//when a tile is clicked or pushed out of it's col it should flip to reveal the color or shape on it
function flipTile(){
//todo flip the tile if the shape or color has previously been found use sortTile() to automatically sort the tile into that row
//if the flipped tile has not been uncovered before let the player choose a col to sort the tile to and flip the next tile
let tile = this;
if (tile.dataset.type === 'color') {
    tile.style.backgroundColor = tile.dataset.value;
    tile.innerHTML = '';
} else if (tile.dataset.type === 'shape') {
    tile.style.backgroundColor = '';
    tile.innerHTML = tile.dataset.value;
}
}



