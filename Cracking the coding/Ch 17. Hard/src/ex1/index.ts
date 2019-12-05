import Card from "./Card"
import Shuffle, { RamdomShuffle } from "./Shuffle"

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