import arrayUnique from "../Util/arrayUnique";

class Xmas {
    findFixNumbers = (inputs: Array<number>, numberToFix: number): number => {
        let length = 2;
        while (true) {
            const map = this.buildSummedNumbers(inputs, length);
            if (map.has(numberToFix)) {
                const values: Array<number> = map.get(numberToFix) || [0];
                return Math.min(...values) + Math.max(...values);
            }

            length++;
        }
    }

    findInvalidNumbers = (inputs: Array<number>, preamble: number): Array<number> => {
        return inputs
            .filter((input: number, index: number, originalInputs) => {
                if (index < preamble) {
                    return false;
                }

                return this.buildValidNumbers(originalInputs.slice(index - preamble, index)).indexOf(input) < 0
            })
    }

    buildValidNumbers = (inputs: Array<number>): Array<number> => {        
        return inputs
            .map((input: number, index) => {
                const summedNumbers: Array<number> = [];
                inputs.forEach((numberToSum: number, index2: number) => {
                    if (index !== index2) {
                        summedNumbers.push(input + numberToSum);
                    }
                })

                return summedNumbers;
            })
            .reduce((prev: Array<number>, curr: Array<number>) => {
                return prev.concat(curr);
            })
            .filter(arrayUnique)
    }

    buildSummedNumbers = (inputs: Array<number>, length: number): Map<number, Array<number>> => {
        const map: Map<number, Array<number>> = new Map
        for (let i = 0; i < inputs.length; i++) {
            let result = inputs[i];
            const numberList = [inputs[i]];
            for (let l = 1; l < length; l++) {            
                if (inputs[i + l] !== undefined) {
                    result += inputs[i + l];
                    numberList.push(inputs[i + l]);        
                }            
            }
            if (numberList.length === length) {
                map.set(result, numberList);
            }
        }

        return map;
    }
}

export default Xmas;
