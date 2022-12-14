class Ship{
    constructor(length){
        this.length = length;
        this.ship = this.createShip(length);
        this.sunk = false;
    }

    createShip(length){
        let ship = [];
        for(let i = 0; i < length; i++){
            ship.push({hit: false});
        }
        return ship;
    }
    
    hit(index) {
        this.ship[index].hit = true;
    }

    isSunk(){
        for(let i = 0; i < this.length; i++){
            if(!this.ship[index].hit){
                return false;
            }
        }
        return true;
    }
}

export default Ship;