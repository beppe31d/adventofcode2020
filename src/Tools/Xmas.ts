import arrayUnique from "../Util/arrayUnique";

class Xmas {
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
}

export default Xmas;
