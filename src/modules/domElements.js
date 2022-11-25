function createBody(){
    let body = document.body;

    let header = document.createElement('div');
    header.classList.add('header');
    header.textContent = "Battleship";

    let container = document.createElement('div');
    container.classList.add("container");

    let gameContainer = document.createElement('div');
    gameContainer.classList.add("game-container");

    let playerContainer = document.createElement('div');
    playerContainer.classList.add("player-container");
    let aiContainer = document.createElement('div');
    aiContainer.classList.add("ai-container");

    let playerName = document.createElement('div');
    playerName.classList.add("player-name");
    let playerBoard = createBoard(10);
    playerBoard.classList.add("player-board");

    let aiName = document.createElement('div');
    aiName.classList.add("ai-name");
    let aiBoard = createBoard(10);
    aiBoard.classList.add("ai-board");

    playerContainer.append(playerName, playerBoard);
    aiContainer.append(aiName, aiBoard);

    gameContainer.append(playerContainer, aiContainer);
    container.append(header, gameContainer);
    body.append(container)
}

function createBoard(length){
    let container = document.createElement('div');
    container.classList.add('board');
    let height = length * 32;
    container.style.height = height + "px";

    for(let col = 0; col < length; col++){
        let r = document.createElement('div');
        r.classList.add('row');
        r.style.height = "32px";
        for(let row = 0; row < length; row++){
            let square = document.createElement('div');
            square.classList.add('square');

            //square.addEventListener('mousedown', changeColor);
    
            r.appendChild(square);
        }

        container.appendChild(r);
    }
    return container;
}

export default createBody;