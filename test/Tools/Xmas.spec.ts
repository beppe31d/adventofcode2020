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

test('Test build summed numbers', () => {    
    const map = xmas.buildSummedNumbers([1, 2, 3, 4], 2);
    expect(map.get(3)).toStrictEqual([1, 2]);    
    expect(map.get(5)).toStrictEqual([2, 3]);    
    expect(map.get(7)).toStrictEqual([3, 4]);    
});

test('Test build summed numbers', () => {    
    const map = xmas.buildSummedNumbers([1, 2, 3, 4], 3);
    expect(map.get(6)).toStrictEqual([1, 2, 3]);    
    expect(map.get(9)).toStrictEqual([2, 3, 4]);        
});

test('Test find fix number', () => {    
    expect(xmas.findFixNumbers([
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
    ], 127)).toBe(62);    
});