import ValidPasswordCounter from '../../src/Tools/ValidPasswordCounter'
import PasswordValidator from '../../src/Tools/PasswordValidator'
import PasswordValidatorNew from '../../src/Tools/PasswordValidatorNew'

test('Test valid passwords with old method', () => {
    expect(ValidPasswordCounter([
        "1-3 a: abcde",
        "1-3 b: cdefg",
        "2-9 c: ccccccccc"
    ], PasswordValidator)).toBe(2);    
});

test('Test valid passwords with new method', () => {
    expect(ValidPasswordCounter([
        "1-3 a: abcde",
        "1-3 b: cdefg",
        "2-9 c: ccccccccc"
    ], PasswordValidatorNew)).toBe(1);    
});
