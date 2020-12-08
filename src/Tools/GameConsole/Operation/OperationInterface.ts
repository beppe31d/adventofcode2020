import OperationResult from "../OperationResult";

interface OperationInterface {
    execute(value: number): OperationResult;
}

export default OperationInterface;
