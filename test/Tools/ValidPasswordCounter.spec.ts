import ValidPasswordCounter from '../../src/Tools/ValidPasswordCounter'

test('Test valid passwords', () => {
    expect(ValidPasswordCounter([
        "1-3 a: abcde",
        "1-3 b: cdefg",
        "2-9 c: ccccccccc"
    ])).toBe(2);    
});
