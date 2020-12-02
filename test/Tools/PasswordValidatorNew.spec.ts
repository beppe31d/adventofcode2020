import PasswordValidatorNew from '../../src/Tools/PasswordValidatorNew'

test('Test valid passwords', () => {
    expect(PasswordValidatorNew({
        password: "abcde", 
        charToSearch:"a", 
        minOccurs: 1,
        maxOccurs: 3
    })).toBe(true);
});

test('Test invalid password', () => {
    expect(PasswordValidatorNew({
        password: "ccccccccc", 
        charToSearch:"c", 
        minOccurs: 1,
        maxOccurs: 9
    })).toBe(false);
    expect(PasswordValidatorNew({
        password: "cdefg", 
        charToSearch:"b", 
        minOccurs: 1,
        maxOccurs: 3
    })).toBe(false);
});
