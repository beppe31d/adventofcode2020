import Acc from "./Operation/Acc";
import Jmp from "./Operation/Jmp";
import Nop from "./Operation/Nop";
import OperationInterface from "./Operation/OperationInterface";

export default (operation: string): OperationInterface => {
    switch (operation) {
        case 'acc':
            return new Acc();

        case 'jmp':
            return new Jmp();    
    }

    return new Nop();
}
