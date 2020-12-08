import GameConsole from '../../../src/Tools/GameConsole/GameConsole'

const gameConsole = new GameConsole();

test('Test find infinite loop', () => {   
    const operations = gameConsole.buildOperations([
        "nop +0",
        "acc +1",
        "jmp +4",
        "acc +3",
        "jmp -3",
        "acc -99",
        "acc +1",
        "jmp -4",
        "acc +6",
    ]); 
    expect(gameConsole.findInfiniteLoop(operations).accumulator).toBe(5);    
});


test('Test fix the program', () => {   
    const operations = gameConsole.buildOperations([
        "nop +0",
        "acc +1",
        "jmp +4",
        "acc +3",
        "jmp -3",
        "acc -99",
        "acc +1",
        "jmp -4",
        "acc +6",
    ]); 
    expect(gameConsole.fixTheProgram(operations)).toBe(8);    
});
