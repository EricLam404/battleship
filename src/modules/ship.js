class Ship{
    constructor(length){
        this.length = length;
        this.ship = this.createShip(length);
    }

    createShip(length){
        let ship = [];
        for(let i = 0; i < length; i++){
            ship.push({hit: false});
        }
        return ship;
    }
    
}

export default Ship;