import { BlackJackCard } from "../Card"
import { DescShuffle } from "../Shuffle"
import DeckOfCards from "../"

describe("Test ex1", () => {
    let deck = null

    beforeEach(() => {
        deck = new DeckOfCards([new BlackJackCard(9, "black", "jack"), new BlackJackCard(3, "black", "jack"), new BlackJackCard(6, "black", "jack")])
    })

    afterEach(() => {
        deck = null
    })

    it("initialize an instance of blackjack card", () => {
        const card = new BlackJackCard(9, "black", "jack")

        expect(card.number).toEqual(9)
        expect(card.color).toEqual("black")
        expect(card.shape).toEqual("jack")
    })

    it("initialize an instance of deck", () => {
        expect(deck.cards).toHaveLength(3)
    })

    it("shuffle the cards in the deck by number in random order default", () => {
        deck.shuffle()

        deck.cards.forEach(card => expect([9, 6, 3]).toContain(card.number))
    })

    it("shffle the cards in the deck by number in descending order", () => {
        deck.setShuffle(new DescShuffle())
        deck.shuffle()

        expect(deck.cards.map(card => card.number)).toEqual([9, 6, 3])
    })
})