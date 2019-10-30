import Card from "./Card"

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

export default Shuffle

export {
    DescShuffle,
    RamdomShuffle
}