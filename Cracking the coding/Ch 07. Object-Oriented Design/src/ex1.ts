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

interface Shuffle {
    sort(cards: Card[]): void
}

class DescShuffle implements Shuffle {
    sort(cards: Card[]) {
        cards.sort((a: Card, b: Card) => -1 * (a.number - b.number))
    }
}

class RamdomShuffle implements Shuffle {
    sort(cards: Card[]) {
        cards.sort(() => Math.random() > 0.5 ? 1: - 1)
    }
}

export default class DeckOfCards {
    constructor(private _cards: Card[], private _shuffle: Shuffle = new RamdomShuffle()) {}

    public get cards(): Card[] {
        return this._cards
    }

    public setShuffle(shuffle: Shuffle) {
        this._shuffle = shuffle
    }

    public shuffle() {
        this._shuffle.sort(this._cards)
    }
}

export {
    BlackJackCard,
    DescShuffle,
    RamdomShuffle
}