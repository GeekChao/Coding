import add from "../"

describe("Add two integers without plus", () => {
    it("when they have the same length of bit sequences", () => {
        expect(add(4, 5)).toEqual(9)
    })

    it("when they have the one length difference of bit sequences", () => {
        expect(add(21, 33)).toEqual(54)
    })

    it("when they have the more than on length differences of bit sequences", () => {
        expect(add(21, 1233)).toEqual(1254)
    })

    it("when they have the more than on length differences of bit sequences", () => {
        expect(add(63, 5)).toEqual(68)
    })
})

