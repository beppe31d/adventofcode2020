import OperationResult from "../OperationResult";
import OperationInterface from "./OperationInterface";

class Nop implements OperationInterface {
    execute = (value: number): OperationResult => {
        return {
            accumulatorIncrease: 0,
            indexIncrease: 1
        }
    }
}

export default Nop;
