import BinaryBoarding from '../../src/Tools/BinaryBoarding'

const binaryBoarding = new BinaryBoarding();

test('Test build row number', () => {    
    expect(binaryBoarding.buildRow("FBFBBFF")).toBe(44);    
});

test('Test build column number', () => {    
    expect(binaryBoarding.buildColumn("RLR")).toBe(5);    
});

test('Test build seat Id', () => {    
    expect(binaryBoarding.buildSeatId("FBFBBFFRLR")).toBe(357);    
    expect(binaryBoarding.buildSeatId("BFFFBBFRRR")).toBe(567);    
    expect(binaryBoarding.buildSeatId("FFFBBBFRRR")).toBe(119);    
    expect(binaryBoarding.buildSeatId("BBFFBBFRLL")).toBe(820);    
});

test('Test Highest seat number', () => {    
    expect(binaryBoarding.highestSeatId([
        "FBFBBFFRLR",
        "BFFFBBFRRR",
        "BBFFBBFRLL",
        "FFFBBBFRRR"        
    ])).toBe(820);    
});
