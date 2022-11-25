class Gameboard{
    constructor() {
        this.gameboard = this.createGameBoard();
        this.missedAttacks = [];
    }

    createGameBoard() {
        let array = [];
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                array.push({ shipName: undefined, shipIndex: undefined });
            }
        }
        return array;
    }
    recieveAttack(x, y){
        if(this.gameboard[x][y].shipName == undefined){
            this.missedAttacks.push({x: x, y: y});
        }
    }
}

export default Gameboard;