/**
 * Random Set: write a method to randomly generate a set of m integers from an array of size n. Each element has equal probility to be choosen
 */

 export const getRandomIndex = (arr: number[]): number => Math.trunc(Math.random() * arr.length)

 export const generateRandomSet = (arr: number[]) => (m: number) => {
    if(m > arr.length) throw new Error("Please pick up a samller number, out of boundary")

    const generate = (arr, m) => {
        if(m === 0) return []

        const index = getRandomIndex(arr)
        const item = arr[index]
        const newArr = [...arr.slice(0, index), ...arr.slice(index + 1)]
        
        return [item, ...generate(newArr, m - 1)]
    }

    return generate(arr, m)
 }
