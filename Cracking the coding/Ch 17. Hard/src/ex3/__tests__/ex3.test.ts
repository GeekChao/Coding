import { generateRandomSet } from ".."

describe("Random Set", () => {
    let arr = null

    beforeEach(() => {
        arr = [12, 34, 455, 13, 17, 390]
    })

    it("randomly generate a set of 3 integers", () => {
        const result = generateRandomSet(arr)(3)
        expect(result).toHaveLength(3)
        
        result.forEach(ele => {
            expect(arr).toContain(ele)
        })
    })

    it("randomly generate a set of 5 integers", () => {
        const result = generateRandomSet(arr)(5)
        expect(result).toHaveLength(5)
        
        result.forEach(ele => {
            expect(arr).toContain(ele)
        })
    })


    it("throw a error when the length of generated set is larger than the original array", () => {
        expect(() => {
            generateRandomSet(arr)(7)
        }).toThrowError()
    })
})