import GameConsole from '../../../src/Tools/GameConsole/GameConsole'

const gameConsole = new GameConsole();

test('Test build row number', () => {    
    expect(gameConsole.findInfiniteLoop([
        "nop +0",
        "acc +1",
        "jmp +4",
        "acc +3",
        "jmp -3",
        "acc -99",
        "acc +1",
        "jmp -4",
        "acc +6",
    ])).toBe(5);    
});
