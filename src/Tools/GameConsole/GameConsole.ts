import OperationInterface from "./Operation/OperationInterface";
import OperationBuilder from "./OperationBuilder";

type Operation = {
    command: OperationInterface;
    value: number;
}

type CheckedIndexes = {
    [P: number]: number
}

class GameConsole {
    findInfiniteLoop = (inputs: Array<string>): number => {
        let index = 0;
        let accumulator = 0;
        const operations = this.buildOperations(inputs);
        const checkedIndexes: CheckedIndexes = {}

        while (true) {
            if (checkedIndexes[index] !== undefined) {
                return accumulator;
            }
            
            checkedIndexes[index] = 1;
            const result = operations[index].command.execute(operations[index].value);
            accumulator += result.accumulatorIncrease;
            index += result.indexIncrease;
        }
    }

    buildOperations = (inputs: Array<string>): Array<Operation> => {
        return inputs
            .map((input: string) => {
                const splitted = input.split(" ");
                return {
                    command: OperationBuilder(splitted[0]),
                    value: parseInt(splitted[1])
                }
            })
    }
}

export default GameConsole;
