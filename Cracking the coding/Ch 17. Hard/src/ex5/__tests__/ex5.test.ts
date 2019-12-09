import { hasEqualNumAndLetters, generateSubArr, findLongestSubArr } from "../"

describe("Letters and Numbers", () => {
    it("can check if the array has an equal number of letters and numbers", () => {
        const arr1 = [1, 2, 'a', 'c', 3]
        expect(hasEqualNumAndLetters(arr1)).toBe(false)

        const arr2 = [1, 2, 'a', 'c', 3, 'd']
        expect(hasEqualNumAndLetters(arr2)).toBe(true)
    })

    it("can generate all the possible subarrys with one element eliminated", () => {
        const arr1 = [1, 2, 'a', 'c', 3]
        const iterator = generateSubArr(arr1)

        arr1.forEach(() => {
            const subArr = iterator.next().value
            expect(subArr).toHaveLength(arr1.length - 1)
        })
    })

    it("find the longest subarray with an array containing [1, 2, 'a', 'c', 3]", () => {
        const arr = [1, 2, 'a', 'c', 3]
        const findLSubArr = findLongestSubArr(generateSubArr)(hasEqualNumAndLetters)

        expect(findLSubArr(arr)).toHaveLength(4)
    })

    it("find the longest subarray with an array containing [1, 'f', 'a', 'c', 3, 'd']", () => {
        const arr = [1, 'f', 'a', 'c', 3, 'd', 'r', 7]
        const findLSubArr = findLongestSubArr(generateSubArr)(hasEqualNumAndLetters)

        expect(findLSubArr(arr)).toHaveLength(6)
    })

    it("find the longest subarray with an array containing ['e', 'f', 'a', 'c', 'r', 'd', 'r', 'e']", () => {
        const arr = ['e', 'f', 'a', 'c', 'r', 'd', 'r', 'e']
        const findLSubArr = findLongestSubArr(generateSubArr)(hasEqualNumAndLetters)

        expect(findLSubArr(arr)).toHaveLength(0)
    })
})