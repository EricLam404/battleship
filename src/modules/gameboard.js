class Gameboard{
    constructor() {
        this.gameBoardArray = this.createGameBoard();
        this.missedAttacks = [];
    }
    createGameBoard() {
        let array = [];
        let arrayItem = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
            arrayItem.push({ shipName: undefined, shipIndex: undefined });
        }
            array.push(arrayItem);
            arrayItem = [];
        }
        return array;
    }
}

export default Gameboard;