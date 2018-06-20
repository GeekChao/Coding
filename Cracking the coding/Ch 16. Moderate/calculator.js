function calculate(equation){
    if(typeof equation !== 'string') throw 'string needed!';
    let operations = ['+', '-', '*', '/'];
    let precedence = {
        '+': 0,
        '-': 0,
        '*': 1,
        '/': 1
    };
    let opStack = [], numStack = [];

    function strToArr(str){ //extract opprands and opperators from the equation string
        let arr = [];
        for(let i = 0; i < str.length; i++){
            let j = i;
            while(!operations.includes(str[j]) && j < str.length) j++;
            if(j == str.length){
                arr.push(str.slice(i, j));
            }else{
                arr.push(str.slice(i, j));
                arr.push(str[j]);
            }
            i = j;
        }

        return arr;
    }

    function arithmetic(opp, ch2, ch1){
        let num1 = Number(ch1);
        let num2 = Number(ch2);
        switch(opp){
            case '+':
                return num1 + num2;
            case '-':
                return num1 - num2;
            case '*':
                return num1 * num2;
            case '/':
                return num1 / num2;
            default:
                break;
        }
    }
    
    for(let ch of strToArr(equation)){
        if(operations.includes(ch)){ //operators
            if(opStack.length === 0 || precedence[opStack[opStack.length - 1]] < precedence[ch]){
                opStack.push(ch);
            }else{
                while(precedence[opStack[opStack.length - 1]] >= precedence[ch]){
                    let result = arithmetic(opStack.pop(), numStack.pop(), numStack.pop());
                    numStack.push(result);
                }
                opStack.push(ch);                
            }
        }else{ //operands
            numStack.push(ch);
        }
    }

    while(opStack.length !== 0){ //finish calculating the remains
        let result = arithmetic(opStack.pop(), numStack.pop(), numStack.pop());
        numStack.push(result);
    }

    return numStack.pop();
}

module.exports = {
    calculate
};
