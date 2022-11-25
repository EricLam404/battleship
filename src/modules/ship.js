class Ship{
    constructor(length){
        this.length = length;
        this.ship = this.createShip(length);
        this.hit = 0;
        this.sunk = isSunk();
    }

    createShip(length){
        let ship = [];
        for(let i = 0; i < length; i++){
            ship.push({hit: false});
        }
        return ship;
    }

    isSunk(){
        if(this.hit == length)
            return true;
        return false;
    }
    
}

export default Ship;