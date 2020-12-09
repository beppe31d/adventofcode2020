import Xmas from '../../src/Tools/Xmas'

const xmas = new Xmas();

test('Test build valid numbers', () => {    
    expect(xmas.buildValidNumbers([1, 2, 3, 4])).toStrictEqual([
        3,
        4,        
        5,
        6,
        7
    ]);    
});

test('Test find first invalid number', () => {    
    expect(xmas.findInvalidNumbers([
        35,
        20,
        15,
        25,
        47,
        40,
        62,
        55,
        65,
        95,
        102,
        117,
        150,
        182,
        127,
        219,
        299,
        277,
        309,
        576
    ], 5)[0]).toBe(127);    
});
