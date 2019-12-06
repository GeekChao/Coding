/**
 * Ex1: Add Without Plus
 */

 const convertNumToBitArry = (num: number): number[] => Array.from(Number(num).toString(2)).map(num => Number(num)).reverse()
 const convertBitArrayToNum = (bstr: number[]): number => parseInt(bstr.reverse().join(''), 2)

 function add(num1: number, num2: number): number {
    if(typeof num1 !== "number" || typeof num2 !== "number") throw new Error('Only Number!')

    let bSNum = convertNumToBitArry(num1), bLSum = convertNumToBitArry(num2)

    if(bSNum.length > bLSum.length) [bSNum, bLSum] = [bLSum, bSNum]

    let sum = [], extra = 0, res = 0
    const leftBLNum = bLSum.slice(bSNum.length)
    
    bSNum.forEach((a, i) => {
       const b = bLSum[i]
       res = a ^ b ^ extra
       extra = a & b | a & extra | b & extra
       sum.push(res)
    })

    if(extra === 0){
      return convertBitArrayToNum([...sum, ...leftBLNum])
    }

   //find the lowest 0 bit
   const index = leftBLNum.findIndex(num => num === 0)

   if(index === -1){
      return convertBitArrayToNum([...sum, ...leftBLNum.fill(0), 1])
   }else {
      leftBLNum[index] = 1
      return convertBitArrayToNum([...sum, ...leftBLNum])
   }
 }

export default add