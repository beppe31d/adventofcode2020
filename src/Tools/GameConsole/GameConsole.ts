import Jmp from "./Operation/Jmp";
import Nop from "./Operation/Nop";
import OperationInterface from "./Operation/OperationInterface";
import OperationBuilder from "./OperationBuilder";

type Operation = {
    command: OperationInterface;
    value: number;
}

type CheckedIndexes = {
    [P: number]: number
}

type Result = {
    valid: boolean;
    accumulator: number;
}

class GameConsole {
    fixTheProgram = (operations: Array<Operation>): number => {
        for (let i = 0; i < operations.length; i++) {
            if (operations[i].command instanceof Nop) {
                const newOp: Array<Operation> = [];
                operations.forEach(val => newOp.push(Object.assign({}, val)));
                newOp[i].command = new Jmp();
                const result = this.findInfiniteLoop(newOp);
                if (result.valid) {
                    return result.accumulator
                }
            }
            if (operations[i].command instanceof Jmp) {
                const newOp: Array<Operation> = [];
                operations.forEach(val => newOp.push(Object.assign({}, val)));
                newOp[i].command = new Nop();
                const result = this.findInfiniteLoop(newOp);
                if (result.valid) {
                    return result.accumulator
                }
            }
        }

        return -1;
    }

    findInfiniteLoop = (operations: Array<Operation>): Result => {
        let index = 0;
        let accumulator = 0;        
        const checkedIndexes: CheckedIndexes = {}

        while (true) {
            if (checkedIndexes[index] !== undefined) {
                return {
                    valid: false,
                    accumulator
                }
            }
            if (operations[index] === undefined) {
                return {
                    valid: true,
                    accumulator
                }
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
