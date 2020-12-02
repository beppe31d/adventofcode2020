import PasswordValidator from '../../src/Tools/PasswordValidator'

test('Test valid passwords', () => {
    expect(PasswordValidator({
        password: "abcde", 
        charToSearch:"a", 
        minOccurs: 1,
        maxOccurs: 3
    })).toBe(true);
    expect(PasswordValidator({
        password: "ccccccccc", 
        charToSearch:"c", 
        minOccurs: 1,
        maxOccurs: 9
    })).toBe(true);
});

test('Test invalid password', () => {
    expect(PasswordValidator({
        password: "cdefg", 
        charToSearch:"b", 
        minOccurs: 1,
        maxOccurs: 3
    })).toBe(false);
});
