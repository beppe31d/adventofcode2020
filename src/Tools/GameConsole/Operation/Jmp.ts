import OperationResult from "../OperationResult";
import OperationInterface from "./OperationInterface";

class Jmp implements OperationInterface {
    execute = (value: number): OperationResult => {
        return {
            accumulatorIncrease: 0,
            indexIncrease: value
        }
    }
}

export default Jmp;
