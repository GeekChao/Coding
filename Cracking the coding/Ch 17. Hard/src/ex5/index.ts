type LNArray = (string | number)[] | []

export const hasEqualNumAndLetters = (arr: LNArray): boolean => {
    if(!arr.length) return false

    let countNums = 0, countLetters = 0

    for(let ele of arr)
        typeof ele === "number" ? countNums += 1: countLetters += 1

    return countNums === countLetters
}

export function* generateSubArr(arr: LNArray) {
    const queue = [arr]

    while(queue.length) {
        const firstEle = queue.shift()

        for(let i = 0; i < firstEle.length; i++){
            const subArr = [...firstEle.slice(0, i), ...firstEle.slice(i + 1)]
            yield subArr
            queue.push(subArr)
        }
    }

    yield []
}

export const findLongestSubArr = (generateSubArr) => (condFn: (arr: LNArray) => boolean) => (arr: LNArray): LNArray => {
    if(condFn(arr)) return arr

    for(let subArr of generateSubArr(arr)) {
        if(condFn(subArr)) return subArr
    }

    return []
}