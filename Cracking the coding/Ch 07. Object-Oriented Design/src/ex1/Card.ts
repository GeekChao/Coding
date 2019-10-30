class Card {
    constructor(private _number: number) {}

    public get number(): number { 
        return this._number
    }
}


class BlackJackCard extends Card {
    constructor(number: number, private _color: string, private _shape: string) {
        super(number)
    }
    
    public get color(): string { 
        return this._color
    }

    public get shape(): string {
        return this._shape
    }
}

export default Card

export {
    BlackJackCard
}