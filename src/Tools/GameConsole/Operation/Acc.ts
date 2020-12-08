import OperationResult from "../OperationResult";
import OperationInterface from "./OperationInterface";

class Acc implements OperationInterface {
    execute = (value: number): OperationResult => {
        return {
            accumulatorIncrease: value,
            indexIncrease: 1
        }
    }
}

export default Acc;
